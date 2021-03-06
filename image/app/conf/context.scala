package conf

import common.Metrics
import com.gu.management.{ PropertiesPage, StatusPage, ManifestPage }
import com.gu.management.play.{ Management => GuManagement }
import com.gu.management.logback.LogbackLevelPage


object Management extends GuManagement {
  val applicationName = "frontend-image"
  val metrics = Metrics.common

  lazy val pages = List(
    new ManifestPage,
    new UrlPagesHealthcheckManagementPage(
      // TODO: Add gif and png.
      "/n/sys-images/Guardian/About/General/2013/9/6/1378491229277/Airbnb-house-in-Pioneerto-011.jpg"
    ),
    StatusPage(applicationName, metrics),
    new PropertiesPage(Configuration.toString),
    new LogbackLevelPage(applicationName)
  )
}
