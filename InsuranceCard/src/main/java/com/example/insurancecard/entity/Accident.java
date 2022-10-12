package com.example.insurancecard.entity;

import javax.persistence.Column;
import java.sql.Date;

public class Accident {
    private long id;
    @Column(length = 255)
    private String name;
    private Date dateRequest;
    private int statusId;
    private int sender;
}
