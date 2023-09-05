import bcrypt from "bcrypt";

const salt = await bcrypt.genSalt(10);

export const users = [
    {
        name: 'Alex Perez',
        password: await bcrypt.hash('123456',salt),
        email: 'admin@correo.com',
    },
    {
        name: 'Juan Perez',
        password: await bcrypt.hash('123456',salt),
        email: 'juan@correo.com',
    },
];