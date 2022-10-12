package com.example.insurancecard.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Table(name = "tbl_contract")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "code")
    private String code;
    @Column(name = "contractBeginDate")
    private Date beginDate;
    @Column(name = "contractEndDate")
    private Date endDate;
    @Column(name = "priceContract")
    private double priceContract;
    @Column(name = "firstPaymentFee")
    private double FPF;
    @Column(name = "secondPaymentFee")
    private double SPF;
    @Column(name = "firstPaymentDate")
    private Date FPFDate;
    @Column(name = "secondPaymentDate")
    private Date SPFDate;
    @Column(name = "contractDate")
    private Date contractDate;




}
