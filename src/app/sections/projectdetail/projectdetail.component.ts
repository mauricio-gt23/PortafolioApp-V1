import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ProjectDetail {
    id: number;
    title: string;
    imageUrl: string;
    content:string;
    technology: Technologies;
}

interface Technologies {
    backend: string;
    frontend: string;
    githubUrl: string;
    url: string;
    technology?: string;
}

@Component({
    selector: 'app-projects',
    templateUrl: './projectdetail.component.html',
    styleUrls: ['./projectdetail.component.css']
})
export class ProjectDetailComponent {

    projectDetail!: ProjectDetail;
    projectId: any = '';

    projects: ProjectDetail[] = [
        { id: 1, title: 'FinanceApp', imageUrl: '../../../assets/finance.PNG', content: 'FinanceApp is a project where you can register financial bonds and view the payment schedule of the issued bond. In addition, the application has financial logic to obtain the results of the schedule. To do this, you must first register in the application as a user.', 
            technology: {
                backend: 'Made with Spring Boot and Deployed with Heroku',
                frontend: 'Made with Angular and Deployed with FireBase',
                githubUrl: 'https://github.com/mauricio-gt23/FinanceApp',
                url: 'https://finance-app-hosting.web.app/auth/login',
                technology: ''
            }
        },
        { id: 2, title: 'LegizApp', imageUrl: '../../../assets/legiz.PNG', content: 'LegalApp is a project where people with legal problems can contact a lawyer. The application has 2 services, the first is to resolve a legal question and the second is to hire a lawyer to take on a legal case.', 
            technology: {
                backend: 'Made with Spring Boot and Deployed with Heroku',
                frontend: 'Made with Angular',
                githubUrl: 'https://github.com/TeraSoftSI/Legiz_Front_End',
                url: '',
                technology: ''
           }
        },
        { id: 3, title: 'Legiz Landing Page', imageUrl: '../../../assets/legizlp.PNG',  content: 'Landing Page for LegizApp',
            technology: {
                backend: '',
                frontend: '',
                githubUrl: 'https://github.com/TeraSoftSI/LandingPage_Legiz_Ingles',
                url: 'https://terasoftsi.github.io/LandingPage_Legiz_Ingles/',
                technology: 'HTML, CSS and JavaScript'
           }
        },
        { id: 4, title: 'My Web Site', imageUrl: '../../../assets/website.PNG',  content: 'It is a personal website where I share some of my information, all my skills and my professional projects.',
            technology: {
                backend: '',
                frontend: 'Made with Angular and Deployed with FireBase',
                githubUrl: '',
                url: '',
                technology: ''
           }
        }
    ];

    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe( params => {
            this.projectId = params['id'];
            this.projectId = Number.parseInt(this.projectId);
            this.filterProject();
        });
    }
  
    filterProject(): void {
        for(let i=0; i<this.projects.length; i++) {
            if (this.projects[i].id === this.projectId) {
                this.projectDetail = this.projects[i];
                break;
            }
        }
    }
  
  }