export interface Ibooks {
    _id: string,
    title: string,
    author: string,
    genre: "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY",
    isbn: string,
    description?: string;
    copies: number,
    available: boolean;
}



// export const bookSchema = new Schema<Ibooks>({
//     title: { type: String, required: true },
//     author: { type: String, required: true },
//     genre: {
//         type: String, required: true,
//         enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"]
//     },
//     isbn: { type: String, required: true, unique: true },
//     description: { type: String },
//     copies: { type: Number, required: true, min: [0, "Copies must be a positive number"] },
//     available: { type: Boolean, required: true, default: true },
    
// }, {
//     versionKey: false,
//     timestamps: true
// })