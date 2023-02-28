package com.studysphere.coursecraft.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class CourseCraftUtils {
    public static String hashPassword(String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.encode(password);
    }

    public static boolean matchPassword(String password, String hashedPassword){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.matches(password, hashedPassword);
    }
}
