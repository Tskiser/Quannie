package com.example.insurancecard.dto;

import com.example.insurancecard.entity.Account;
import com.example.insurancecard.entity.Contract;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
public class ContractDto {
    private long id;
    private String code;
    private Date beginDate;
    private Date endDate;
    private double priceContract;
    private double FPF;
    private double SPF;
    private Date FPFDate;
    private Date SPFDate;
    private Date contractDate;
    private AccountDto accountDto;

    public ContractDto(Contract contract){
        this.setId(contract.getId());
        this.setCode(contract.getCode());
        this.setBeginDate(contract.getBeginDate());
        this.setEndDate(contract.getEndDate());
        this.setPriceContract(contract.getPriceContract());
        this.setFPF(contract.getFPF());
        this.setSPF(contract.getSPF());
        this.setFPFDate(contract.getFPFDate());
        this.setSPF(contract.getSPF());
        this.setContractDate(contract.getContractDate());
        if (null != contract.getAccount()){
            accountDto = new AccountDto(contract.getAccount());
        }

    }
}
