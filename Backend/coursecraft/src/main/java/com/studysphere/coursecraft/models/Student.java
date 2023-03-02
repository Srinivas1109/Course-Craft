package com.studysphere.coursecraft.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Collections;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Document(collection = "students")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student extends User{
    @Id
    private ObjectId id;
    private List<ObjectId> enrolledCourses;

    public String getUsername(){
        return this.username;
    }
    public String getEmail(){
        return this.email;
    }
    public String getMobileNo(){
        return this.mobileNo;
    }
    public String getFirstname(){
        return this.firstname;
    }
    public String getLastname(){
        return this.lastname;
    }
    public String getPassword(){
        return this.password;
    }

    public List<ObjectId> enrolledCourses(){
        return this.enrolledCourses;
    }

    public Student(String username, String email, String password, String mobileNo, String firstname, String lastname){
        super(username, email, password, mobileNo, firstname, lastname);
        this.enrolledCourses = Collections.<ObjectId>emptyList();
    }

    public Student(ObjectId id, String username, String email, String mobileNo, String firstname, String lastname){
        super(id, username, email, mobileNo, firstname, lastname);
        this.id = id;
        this.enrolledCourses = Collections.<ObjectId>emptyList(); // this should not be an empty list
    }
}
