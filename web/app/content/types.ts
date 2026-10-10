export type Year = number
export type Month =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'

export type DateString = `${Year}-${Month}`

export type AppImage = {
  path: string
  alt: string
}

export type AppFile = {
  path: string
  name: string
}

export type Profile = {
  name: string
  baseline: string
  abstract: string
  image: AppImage
  email: string
  github: string
  linkedin: string
  pdf: AppFile
}

export type Project = {
  name: string
  description: string
  image: AppImage
  stack: string
  status: 'in_progress' | 'done'
  repository?: string
  url?: string
  tags?: string[]
  date: DateString
}

export type WorkExperience = {
  title: string
  company: string
  description: string
  highlights?: string[]
  location: string
  startDate: DateString
  endDate?: DateString
  image?: AppImage
}

export type EducationRecord = {
  title: string
  institution: string
  location: string
  startDate: DateString
  endDate: DateString
  image?: AppImage
}

export type Curriculum = {
  educationRecords: EducationRecord[]
  workExperiences: WorkExperience[]
}
