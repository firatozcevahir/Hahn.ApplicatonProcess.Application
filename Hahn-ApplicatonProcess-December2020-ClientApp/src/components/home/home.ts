import { inject } from 'aurelia-framework';
import { DataService } from '@services/data-service';
import { Applicant } from '@models/applicant-model';

@inject(DataService)
export class Home {
  public isRequesting = false;
  public isError = false;
  public searchTerm = '';

  public applicants: Applicant[] = [];
  public filteredApplicants: Applicant[] = [];
  constructor(private dataService: DataService) {
    this.loadData();
  }


  public loadData(): void {
    this.isRequesting = true;
    this.isError = false;
    this.dataService.get<Applicant[]>('app/applicant/get').then((response) => {
      this.applicants = response.data;
      this.filteredApplicants = this.applicants;
      console.log(this.applicants);
    }).catch((error) => {
      // TODO: Handle Errors
      this.isError = true;
      if(error.statusCode === 0){
        // Server Error
      } else if(error.statusCode === 400){
        // server returned bad request
      }
    }).finally(() => {
      this.isRequesting = false;
    });
  }

  public handleSearch(): void {
    this.filteredApplicants = this.applicants.filter((item) => {
      const term = this.searchTerm.toLowerCase();
      return item.name.toLowerCase().includes(term) ||
        item.address.toLowerCase().includes(term) ||
        item.emailAddress.toLowerCase().includes(term) ||
        item.familyName.toLowerCase().includes(term);
    });
  }
}
