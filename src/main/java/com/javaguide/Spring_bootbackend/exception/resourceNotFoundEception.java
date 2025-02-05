package com.javaguide.Spring_bootbackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class resourceNotFoundEception extends RuntimeException{

    public resourceNotFoundEception(String msg){
        super(msg);
    }
}
