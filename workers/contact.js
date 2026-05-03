const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
    async fetch(req, env) {
        const url = new URL(req.url);

        if (req.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: corsHeaders,
            });
        }

        if (url.pathname !== "/api/contact") {
            return new Response("Not Found", { 
                status: 404, 
                headers: corsHeaders 
            });
        }

        if (req.method !== "POST") {
            return new Response("Method Not Allowed", { 
                status: 405, 
                headers: corsHeaders,
            });
        }

        let body; 
        try {
            body = await req.json()
        } catch {
            return new Response("Invalid JSON", { 
                status: 400, 
                headers: corsHeaders,
            });
        }

        // spam protection - if hidden field is filled, then detected spam
        if (body.company) {
            return new Response(JSON.stringify({ success: true }), {
                status: 200, 
                headers: {
                    "Content-Type": "application/json", 
                    ...corsHeaders
                }
            });
        }

        const { first_name, last_name, email, phone, message } = body;
        
        // validation for required fields
        if (!email || !message) {
            return new Response(
                JSON.stringify({ error: "Missing required fields" }), { 
                    status: 400, 
                    headers: corsHeaders,
                }
            );
        }

        // send email using Resend API
        const resendResponse = await fetch("https://api.resend.com/emails", 
            {
                method: "POST", 
                headers: {
                    "Authorization":  `Bearer ${env.RESEND_API_KEY}`, 
                    "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "UNICEF SFU <contact@unicefsfucampusclub.ca>",
                to: "usfu.club@gmail.com",
                subject: "New Contact Form Submission", 
                html: `
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name</strong> ${first_name || ""} ${last_name || ""}</p>
                    <p><strong>Email:</strong> ${email} </p>
                    <p><strong>Phone:</strong> ${phone || "N/A"} </p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `,
            })
        })

        if (!resendResponse.ok) {
            const errorText = await resendResponse.json();
            console.error("Resend error:", JSON.stringify(errorText, null, 2));

            return new Response(
                JSON.stringify({ error: "Email failed to send" }),
                { 
                    status: 500, 
                    headers: corsHeaders,
                }
            );
        }

        return new Response(
            JSON.stringify({ success: true }), { 
                status: 200, 
                headers: {
                    "Content-Type": "application/json", 
                    ...corsHeaders
                }
            }
        );
    }
};