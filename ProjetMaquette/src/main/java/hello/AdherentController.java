package hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Controller
@RequestMapping("/adherent")
public class AdherentController extends WebMvcConfigurerAdapter {

//    @Override
//    public void addViewControllers(ViewControllerRegistry registry) {
//        registry.addViewController("/adherent/inscription_etape1").setViewName("results");
//    }

    
	@RequestMapping(value="")
	public String gerer() {
		return "adherent/inscription_etape1";
	}
}
