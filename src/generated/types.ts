

export type Parents = {
    parents: Parent[]
}


export type Parent = {
    Id: number    
    FirstName: string
    LastName: string
}

export type Students = {
    students: Student[]
}

export type Student = {
    Id: number
    Lessons: Lesson[]
}

export type Lessons = {
    lessons: Lesson[]
}

export type Lesson = {
    Id: number
}

export type TakenLessons = {
    takenLessons: TakenLesson[]
}

export type TakenLesson = {
    Id: number
    Hours: number
    Status: string
    Subject: string
    TotalPay: number
}

export type TeacherData = {
    teachers: Teacher[]
}

export type Teacher = {
    Id: number
    FirstName: string
    LastName: string
}
