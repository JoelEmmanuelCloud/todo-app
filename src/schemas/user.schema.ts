import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class User {
    @Prop()
    name: string;

    @Prop({unique: [true, 'email already exist']})
    email: string;

    @Prop()
    password: string;
}

export const userSchema = SchemaFactory.createForClass(User);

