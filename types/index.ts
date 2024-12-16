export interface Exam {
  id: string;
  subject: string;
  date: string;
  startTime: string;
  endTime: string;
  roomId: string;
}

export interface Invigilator {
  id: any;
  invigilatorId: string;
  name: string;
  email: string;
  phone: string;
  availability: string[];
}

export interface Room {
  id: string;
  number: string;
  capacity: number;
  features: string[];
}

export interface InvigilationAssignment {
  examId: string;
  invigilatorId: string;
}
export interface InvigilatorScheduleGenarator {
 invigilatorId: any;
 examId: string;
 invigilator: String;
 exam: String;
 date:Date;
 time:Date;
 room:String;
}

