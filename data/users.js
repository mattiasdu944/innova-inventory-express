import bcrypt from "bcrypt";

const salt = await bcrypt.genSalt(10);

export const users = [
    {
        name: 'Usuario 1',
        password: await bcrypt.hash('123456',salt),
        email: 'admin@correo.com',
    },
    {
        name: 'Usuario 2',
        password: await bcrypt.hash('123456',salt),
        email: 'user@correo.com',
    },
];