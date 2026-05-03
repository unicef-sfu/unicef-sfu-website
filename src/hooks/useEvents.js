import { useEffect, useState } from "react"
import Papa from "papaparse"

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSj7Xz0IgNxJd5W68vhX6iLLY3e2x6TDs8VFT1aQ05qXyyF55E9TNB5h5qwwxci9z4caVOAmWaVx-TL/pub?output=csv"

export const useEvents = () => {
    const [eventsByMonth, setEventsByMonth] = useState([])

    useEffect(() => {
        fetch(SHEET_URL)
            .then((res) => res.text())
            .then((csv) => {
                Papa.parse(csv, {
                    header: false,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const rows = results.data.slice(1) // skip header row

                        const flatEvents = rows
                            .map((row) => {
                                const startDate = row[6]?.trim()
                                if (!startDate) return null;

                                const dateObj = new Date(startDate)
                                const month = dateObj.toLocaleString("default", { month: "long" })

                                return {
                                    title: row[0]?.trim(),
                                    building: row[1]?.trim(),
                                    room: row[2]?.trim(),
                                    campus: row[3]?.trim(),
                                    dates: row[4]?.split("|").map(d => d.trim()),
                                    time: row[5]?.trim(),
                                    startDate,
                                    imgLink: row[7]?.trim(),
                                    postLink: row[8]?.trim(),
                                    month
                                };
                            })
                            .filter(Boolean)

                        // hide past events
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)

                        const upcomingEvents = flatEvents.filter((e) => {
                            const eventDate = new Date(e.startDate);
                            eventDate.setHours(0, 0, 0, 0);
                            return eventDate >= today;
                        });

                        const grouped = Object.values(
                            upcomingEvents.reduce((acc, event) => {
                                if (!acc[event.month]) {
                                    acc[event.month] = { month: event.month, events: [] }
                                }
                                acc[event.month].events.push(event)
                                return acc;
                            }, {})
                        );

                        grouped.forEach((group) => {
                            group.events.sort(
                                (a, b) => new Date(a.startDate) - new Date(b.startDate)
                            )
                        });

                        setEventsByMonth(grouped);
                    }
                });
            })
            .catch((err) => {
                console.error("Failed to load events: ", err)
            })
    }, []);
    
    return eventsByMonth;
};