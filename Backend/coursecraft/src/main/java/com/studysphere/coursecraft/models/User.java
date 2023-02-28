package com.studysphere.coursecraft.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private ObjectId id;
    private String username;
    private String password;
    private String email;
    private String mobileNo;
    private String firstname;
    private String lastname;
    private boolean isAdmin;

    public User(String username, String email, String password, String mobileNo, String firstname, String lastname, boolean isAdmin){
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobileNo = mobileNo;
        this.firstname = firstname;
        this.lastname = lastname;
        this.isAdmin = isAdmin;
    }

    public User(ObjectId id, String username, String email, String mobileNo, String firstname, String lastname, boolean isAdmin){
        this.id = id;
        this.username = username;
        this.email = email;
        this.mobileNo = mobileNo;
        this.firstname = firstname;
        this.lastname = lastname;
        this.isAdmin = isAdmin;
    }
}
