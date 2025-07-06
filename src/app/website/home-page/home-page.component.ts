import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectSectionComponent } from "../project-section/project-section.component";
import { SkillSectionComponent } from "../skill-section/skill-section.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { ContactsectionComponent } from "../contactsection/contactsection.component";



@Component({
  selector: 'app-home-page',
  standalone: true,

  imports: [RouterModule, ProjectSectionComponent, SkillSectionComponent, AboutMeComponent, ContactsectionComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

isMenuOpen = false;
isDesktopView = false;

ngOnInit() {
   this.checkViewport();
}

// viewResume() {
//       window.open('/assets/Kowshik_Java_Developer.pdf', '_blank');  
// }
viewResume() {
  const link = document.createElement('a');
  link.href = '/assets/Kowshik_Java_Developer.pdf';
  link.target = '_blank';
  link.click();
}



@HostListener('window:resize')
checkViewport() {
    this.isDesktopView = window.innerWidth > 550; // Adjust the width as needed
    if (this.isDesktopView) {
      this.isMenuOpen = false; // Close the menu on desktop view
    }
}
toggleMenu() {
  if (!this.isDesktopView) {
    
    this.isMenuOpen = !this.isMenuOpen;
  }
}
handleMenuClose(event : Event) {
  if(!this.isDesktopView) {
    event.preventDefault(); // Prevent default anchor behavior
    this.isMenuOpen = false;
    const target = (event.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (target) {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }
  }
}
}
