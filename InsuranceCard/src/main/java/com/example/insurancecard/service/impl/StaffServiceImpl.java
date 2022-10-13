package com.example.insurancecard.service.impl;

import com.example.insurancecard.dto.InformationDto;
import com.example.insurancecard.entity.Information;
import com.example.insurancecard.repository.InformationRepository;
import com.example.insurancecard.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StaffServiceImpl implements StaffService {
    @Autowired
    private InformationRepository repository;
    @Override
    public List<InformationDto> getAll() {
        List<Information> list = repository.findAll();
        List<InformationDto> listInfo = new ArrayList<>();
        for (Information item: list
             ) {
            listInfo.add(new InformationDto(item));
        }
        return listInfo;
    }

    @Override
    public InformationDto save(InformationDto information) {
        if (null != information){
            Information infor = new Information();
            infor.setCode(information.getCode());
            infor.setName(information.getName());
            infor.setGender(information.getGender());
            infor.setFolk(information.getFolk());
            infor.setBrithDate(information.getBrithDate());
            infor.setPhone(information.getPhone());
            infor.setCountry(information.getCountry());
            infor.setCity(information.getCity());
            infor.setDistrict(information.getDistrict());
            infor.setStreet(information.getStreet());
            if(null != infor){
                return new InformationDto(infor);
            }
        }
        return null;
    }

    @Override
    public InformationDto update(InformationDto information, Long id) {
        return null;
    }

    @Override
    public boolean remove(Long id) {
        return false;
    }

    @Override
    public InformationDto getStaffById(Long id) {
        Optional<Information> infor = repository.findById(id);
            if(infor.isPresent()){
                return new InformationDto(infor.get());
            }
            return null;
    }
}
