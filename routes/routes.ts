 import { Express } from "express"
 import heroSectionRoutes from "./home/hero-section.routes"
import carrerOpportunitiesRoutes from "./home/careerOpportunities.routes"
import ourServicesRoutes from "./home/our-services.routes"
import licensesRoutes from "./home/license.routes"
import clientSuccessStoryRoutes from "./home/clientSuccessStories.routes"
import  testimonialRoutes from "./home/testimonial.routes"
import careerConsultationRoutes from "./home/careerConsultation.routes"
import footerRoutes from "./footer/footer.routes"
import uploadRoutes from "./uploads/uploads.routes"
import chiefExecutiveRoutes from "./about/chiefExecutive.routes"
import aboutHeroRoutes from "./about/aboutHero.routes"
import founderSection from "./about/founderProfile.routes"
import objectiveRoutes from "./about/objective.routes"
import infoCardRoutes from "./about/infoCard.routes"
import officeRoutes from "./about/offices.routes"
import downloadRoutes from "./about/download.routes"
import ourServicesHeroRoutes from "./services/ourServices.routes"
import whatWeDoRoutes from "./services/whatWeDo.routes"
import industriesCategoriesRoutes from "./services/industriesCategories.routes"
import manpowerResourceRoutes from './services/manpowerResource.routes'
import visaProcessRoutes from './services/visaProcess.routes'
import whyChooseCavecRoutes from "./services/whyChooseCavec"
import crowdFundingHeroRoutes from "./crowdFunding/crowdFundingHero.routes"
import achievementRoutes from "./crowdFunding/achievement.routes"
import supportRoutes from "./crowdFunding/support.routes"
import successStoryRoutes from "./successStories/successStories.routes"
import leadershipRoutes from "./about/leadership.routes"

const AppRoutes=(app:Express)=>{
app.use("/api/v1/home/hero-section", heroSectionRoutes);
app.use("/api/v1/home/career-opportunities", carrerOpportunitiesRoutes);
app.use("/api/v1/home/our-services", ourServicesRoutes);
app.use("/api/v1/home/licenses", licensesRoutes)
app.use("/api/v1/footer",footerRoutes)
app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/home/client-success-story", clientSuccessStoryRoutes);
app.use("/api/v1/home/testimonial", testimonialRoutes);
app.use("/api/v1/home/careerConsultation", careerConsultationRoutes);
app.use("/api/v1/about/hero-section",aboutHeroRoutes);
app.use("/api/v1/about/founder-section",founderSection)
app.use("/api/v1/about/objective",objectiveRoutes)
app.use("/api/v1/about/infoCard",infoCardRoutes)
app.use("/api/v1/about/offices",officeRoutes)
app.use("/api/v1/about/download",downloadRoutes)
app.use("/api/v1/about/chiefExecutive",chiefExecutiveRoutes)
app.use("/api/v1/services/ourSericesHero",ourServicesHeroRoutes)
app.use("/api/v1/services/whyChooseCavec",whyChooseCavecRoutes)
app.use("/api/v1/services/whatWeDo",whatWeDoRoutes)
app.use("/api/v1/services/industriesCategories",industriesCategoriesRoutes)
app.use("/api/v1/services/manpowerResource",manpowerResourceRoutes)
app.use("/api/v1/services/visaProcess",visaProcessRoutes)
app.use("/api/v1/crowdFunding/hero-section",crowdFundingHeroRoutes)
app.use("/api/v1/crowdFunding/achievement",achievementRoutes)
app.use("/api/v1/crowdFunding/support",supportRoutes)
app.use("/api/v1/crowdFunding/successStory",successStoryRoutes)
app.use("/api/v1/about/leadership",leadershipRoutes)

}

export default AppRoutes









