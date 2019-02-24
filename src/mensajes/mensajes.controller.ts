import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { ServicioMensajesService } from 'src/servicio-mensajes/servicio-mensajes.service';


@Controller('mensajes')
export class MensajesController {
    constructor(private mensajeSercivice: ServicioMensajesService) { }
    @Post()
    create(@Body() createMensajeDto: {}, @Res() response) {
        this.mensajeSercivice.createMensaje(createMensajeDto).then(
            res => {
                response.status(HttpStatus.CREATED).json(res);
                return response;
            },
            err => {

            }
        ).catch(
            err => {
                return response.status(HttpStatus.FORBIDDEN).json(err);
            });
    }

    @Get()
    getall(@Res() response) {
        this.mensajeSercivice.getAll().then(
            res => {
                return response.status(HttpStatus.OK).json(res);
            }
        ).catch(
            err => {
                return response.status(HttpStatus.FORBIDDEN).json(err);
            });
    }

    @Put(':id')
    PaymentRequestUpdateEvent(@Body() update: {}, @Res() response, @Param('id') idmensaje) {
        this.mensajeSercivice.updateMensaje(update, idmensaje).then(
            res => {
                return response.status(HttpStatus.OK).json(res);
            }
        ).catch(
            err => {
                return response.status(HttpStatus.FORBIDDEN).json(err);
            }
        );
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idmensaje) {
        this.mensajeSercivice.deleteMensaje(idmensaje).then(
            res => {
                return response.status(HttpStatus.OK).json(res);
            }
        ).catch(
            err => {
                return response.status(HttpStatus.FORBIDDEN).json(err);
            });
    }
}
