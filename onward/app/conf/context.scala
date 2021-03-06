package conf

import common.Metrics
import com.gu.management.{ PropertiesPage, StatusPage, ManifestPage }
import com.gu.management.play.{ Management => GuManagement }
import com.gu.management.logback.LogbackLevelPage

object Management extends GuManagement {
  val applicationName = "frontend-onward"
  val metrics = Metrics.common

  lazy val pages = List(
    new ManifestPage,
    new UrlPagesHealthcheckManagementPage(
      "/onward/popular-onward/path.json",
      "/top-stories?callback=navigation",
      "/most-read/society.json?callback=showMostPopular",
      "/related/theobserver/2012/nov/18/the-big-issue-cyclists-versus-motorists?callback=showRelated"
    ),
    StatusPage(applicationName, metrics),
    new PropertiesPage(Configuration.toString),
    new LogbackLevelPage(applicationName)
  )
}
