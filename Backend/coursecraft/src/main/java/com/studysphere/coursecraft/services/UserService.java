package com.studysphere.coursecraft.services;

import com.studysphere.coursecraft.models.User;
import com.studysphere.coursecraft.repositories.UserRepository;
import com.studysphere.coursecraft.utils.CourseCraftUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Optional<User> getUser(String username){
        return userRepository.findUserByUsername(username);
    }

    public User createUser(String username, String email, String password, String mobileNo, String firstname, String lastname, boolean isAdmin){
        String hashedPassword = CourseCraftUtils.hashPassword(password);
        User user = userRepository.insert(new User(username, email, hashedPassword, mobileNo, firstname, lastname, isAdmin));
        return new User(user.getId(), user.getUsername(), user.getEmail(), user.getMobileNo(), user.getFirstname(), user.getLastname(), user.isAdmin());
    }

    public Optional<User> loginUser(String username, String password){
        Optional<User> user = userRepository.findUserByUsername(username);
        if(user.isPresent()){
            if(CourseCraftUtils.matchPassword(password, user.get().getPassword())){

                return Optional.of(new User(user.get().getId(), user.get().getUsername(), user.get().getEmail(), user.get().getMobileNo(), user.get().getFirstname(), user.get().getLastname(), user.get().isAdmin()));
            }
        }
        return Optional.empty();
    }
}
