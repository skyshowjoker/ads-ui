export interface Patient{
    id: number;
    name: string;
    gender: string;
    birthday: Date | null;
    caseId: string | null;
    phone: string | null;
    email: string | null;
    description: string | null;
    uploadDate: Date | null
    emzlResult: string | null
    ProgressiveResult: string | null
}