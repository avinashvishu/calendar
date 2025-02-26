export type EventType = "birthday" | "project" | "meeting" | "trip" | "workshop"

export interface CalendarEvent {
  id: string
  title: string
  start: Date
  end: Date
  type: EventType
  organizer: string
  color?: string
}

export type ViewType = "daily" | "weekly" | "monthly"