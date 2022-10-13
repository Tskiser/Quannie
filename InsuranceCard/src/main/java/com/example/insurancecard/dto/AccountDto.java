package com.example.insurancecard.dto;

import com.example.insurancecard.entity.Account;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountDto {
    private long id;
    private String username;
    private String password;
    private long roleId;
    private String roleName;

    public AccountDto() {
    }

    public AccountDto(Account account){
        if(null != account){
            this.setId(account.getId());
            this.setUsername(account.getUsername());
            this.setPassword(account.getPassword());
            this.setRoleId(account.getRoleId());
            this.setRoleName(account.getRoleName());
        }
    }
}
