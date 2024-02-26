
export type TakenLessonList = {
    lessons: TakenLesson[]
}

export type TakenLesson = {
    Id: number
    Hours:number
    Status: string
    Subject: string,
    IsDoubleLesson: Boolean
}