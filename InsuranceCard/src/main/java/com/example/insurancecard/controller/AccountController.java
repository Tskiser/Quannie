package com.example.insurancecard.controller;

import com.example.insurancecard.dto.AccountDto;
import com.example.insurancecard.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/account")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AccountController {
    @Autowired
    private AccountService service;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity<List<AccountDto>> getAll(){
        List<AccountDto> result = service.getAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<AccountDto> saveUser(@RequestBody AccountDto accountDto){
        AccountDto result = service.saveAccount(accountDto);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(value = "/staff")
    public ResponseEntity<List<AccountDto>> getListStaff(){
        List<AccountDto> list = service.getListStaff();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    @GetMapping(value = "/customer")
    public ResponseEntity<List<AccountDto>> getListCustomer(){
        List<AccountDto> list = service.getListCustomer();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}
