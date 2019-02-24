import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from 'src/mensajes/entities/mensaje.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicioMensajesService {
    constructor(@InjectRepository(Mensaje) private readonly mensajeRepository: Repository<Mensaje>, ) {
    }

    async getAll(): Promise<any> {
        return await this.mensajeRepository.find()
    }

    async createMensaje(mensaje): Promise<any> {
        return await this.mensajeRepository.save(mensaje)
    }

    async updateMensaje(mensaje, id) {
        const newMensaje = await this.mensajeRepository.findOne(id);
        newMensaje.nick = mensaje.nick;
        newMensaje.mensaje = mensaje.mensaje;
        return await this.mensajeRepository.save(newMensaje);
    }

    async deleteMensaje(id): Promise<any> {
        return await this.mensajeRepository.delete(id);
    }
}
