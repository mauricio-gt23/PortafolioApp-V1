import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Project {
  id: number;
  title: string;
  urlImage: string;
  altImage: string;
}


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = [
    { id: 1, title: 'FinanceApp', urlImage: '../../../assets/finance.PNG', altImage: 'Finance App'},
    { id: 2, title: 'LegizApp', urlImage: '../../../assets/legiz.PNG', altImage: 'Legiz App'},
    { id: 3, title: 'Legiz Landing Page', urlImage: '../../../assets/legizlp.PNG', altImage: 'Leginz LP'},
    { id: 4, title: 'My Web Site', urlImage: '../../../assets/website.PNG', altImage: 'Web Site'}
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goDetail( id: any ): void {
    this.route.navigate([`projects/${id}`]);
  }

}
