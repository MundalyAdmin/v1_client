import { BaseModel } from "../shared/models/BaseModel";

export interface InitiativeImpact extends BaseModel {
  name: string;
  description?: string 
  startDate: Date
  endDate?: Date
  country?: string
  city?: string
  ethnicity?: string
  sex?: "Male" | "Female" | "All"
  ageRangeStart?: number
  ageRangeEnd?: number
  goals: InitiativeImpactGoal[]
}

export interface InitiativeImpactGoal extends BaseModel {
  name: string
  metricType: "Total" | "Average"
  metric: string
  target?: number
  startValue?: number
  data: InitiativeImpactGoalData[]
}

export interface InitiativeImpactGoalData extends BaseModel {
  data: number
  description?: string
  date: Date
}