package com.spring.angular4.shoppingcart.user;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.angular4.shoppingcart.domain.User;

@RestController
public class UserController {
	
	@RequestMapping(value="/login", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "http://localhost:4200", exposedHeaders={"Access-Control-Allow-Origin", "Access-Control-Allow-Headers"})
	@ResponseBody public String login(@RequestBody User user) throws JSONException {
		System.out.println("Inside Login Controller");
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("username", user.getUsername());
		return  jsonObject.toString();
	}
	
	@RequestMapping(value="/login1", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE )
	@CrossOrigin(origins = "http://localhost:4200", exposedHeaders={"Access-Control-Allow-Origin", "Access-Control-Allow-Headers"})
	@ResponseBody public String login1() throws JSONException {
		System.out.println("Inside Login1 Controller");
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("name", "Chetan");
		return  jsonObject.toString();
	}

}
