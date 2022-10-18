package com.example.insurancecard.repository;

import com.example.insurancecard.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account,Long> {

    @Query(value = "SELECT a from Account a where a.role = '2'")
    public List<Account> getListStaff();

    @Query(value = "SELECT a from Account a where a.role = '1'")
    public List<Account> getListCustomer();
}
