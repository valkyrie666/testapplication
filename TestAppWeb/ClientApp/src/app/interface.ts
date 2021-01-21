export interface Department {
  Id?: number
  Name: string
  DateOfCreation: Date
  DateOfEdit: Date
  Workers?: Worker[]
}

export interface Worker {
  Id?: number
  Name: string
  DateOfCreation: Date,
  DateOfEdit: Date
  DateOfEmployement: Date
  Post: string
  DepartmentId?: number
  Department?: Department
}
