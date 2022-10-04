package com.example.insurancecard.controller;

import com.example.insurancecard.dto.AccountDto;
import com.example.insurancecard.dto.EmployeeDto;
import com.example.insurancecard.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/account")
@CrossOrigin(origins = "*", allowedHeaders = "*")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AccountController {
    @Autowired
    private AccountService service;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity<List<AccountDto>> getAll(){
        List<AccountDto> result = service.getAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
