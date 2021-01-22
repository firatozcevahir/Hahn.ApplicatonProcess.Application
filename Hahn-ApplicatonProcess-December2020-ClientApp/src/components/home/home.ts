import { inject } from 'aurelia-framework';
import { DataService } from '@services/data-service';
import { IApplicant } from '@models/applicant-model';

@inject(DataService)
export class Home {
  public isRequesting = false;
  public isError = false;
  public searchTerm = '';

  public applicants: IApplicant[] = [];
  public filteredApplicants: IApplicant[] = [];
  constructor(private dataService: DataService) {
    this.loadData();
  }


  public loadData(): void {
    this.isRequesting = true;
    this.isError = false;
    this.dataService.get<IApplicant[]>('app/applicant/get').then((response) => {
      this.applicants = response.data;
      this.filteredApplicants = this.applicants;
      console.log(this.applicants);
    }).catch((error) => {
      // TODO: Handle Errors
      this.isError = true;
      console.log('this will be fired', error);
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
