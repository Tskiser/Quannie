package com.example.insurancecard.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Table(name = "tbl_address")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "country", length = 255)
    private String country;
    @Column(name = "city", length = 255)
    private String city;
    @Column(name = "district", length = 255)
    private String district;
    @Column(name = "street", length = 255)
    private String street;
//    @OneToMany(mappedBy = "address", cascade = CascadeType.ALL)
//    private List<Information> information;

}
