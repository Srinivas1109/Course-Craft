package com.studysphere.coursecraft.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


public class User {

    protected String username;
    protected String password;
    protected String email;
    protected String mobileNo;
    protected String firstname;
    protected String lastname;

    public User(){
        this.username = null;
        this.email = null;
        this.mobileNo = null;
        this.password = null;
        this.firstname = null;
        this.lastname = null;
    }

    public User(String username, String email, String password, String mobileNo, String firstname, String lastname){
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobileNo = mobileNo;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public User(ObjectId id, String username, String email, String mobileNo, String firstname, String lastname){
//        this.id = id;
        this.username = username;
        this.email = email;
        this.mobileNo = mobileNo;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
