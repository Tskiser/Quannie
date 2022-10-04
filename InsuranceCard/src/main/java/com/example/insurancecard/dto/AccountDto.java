package com.example.insurancecard.dto;

import com.example.insurancecard.entity.Account;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
@Getter
@Setter
public class AccountDto {
    private long id;
    private String username;
    private String password;

    public AccountDto() {
    }

    public AccountDto(Account account){
        if(account != null){
            this.setId(account.getId());
            this.setUsername(account.getUsername());
            this.setPassword(account.getPassword());
        }
    }
}
