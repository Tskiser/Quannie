package com.example.insurancecard.service.impl;

import com.example.insurancecard.dto.AccountDto;
import com.example.insurancecard.dto.EmployeeDto;
import com.example.insurancecard.entity.Account;
import com.example.insurancecard.entity.Employee;
import com.example.insurancecard.repository.AccountRepository;
import com.example.insurancecard.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository repository;

    @Override
    public List<AccountDto> getAll() {
        List<Account> list = repository.findAll();
        List<AccountDto> result = new ArrayList<>();
        for (Account acc : list){
            result.add(new AccountDto(acc));
        }
        return result;
    }
}
