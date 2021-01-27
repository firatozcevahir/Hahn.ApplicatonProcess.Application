import { inject } from 'aurelia-framework';
import { DataService } from '@services/data-service';
import { Applicant } from '@models/applicant-model';
import { DialogServiceWrapper } from '@services/dialog-service';

@inject(DataService, DialogServiceWrapper)
export class ListApplicant {
  public isRequesting = false;
  public isError = false;
  public searchTerm = '';

  public applicants: Applicant[] = [];
  public filteredApplicants: Applicant[] = [];
  constructor(
    private dataService: DataService,
    private dialogService: DialogServiceWrapper
  ) {
    this.loadData();
  }

  public loadData(): void {
    this.isRequesting = true;
    this.isError = false;
    this.dataService
      .get<Applicant[]>('app/applicant')
      .then((response) => {
        this.applicants = response.data;
        this.filteredApplicants = this.applicants;
      })
      .catch((error) => {
        // TODO: Handle Errors
        this.isError = true;
        if (error.statusCode === 0) {
          // Server Error
        } else if (error.statusCode === 400) {
          // server returned bad request
        }
      })
      .finally(() => {
        this.isRequesting = false;
      });
  }

  public handleSearch(): void {
    this.filteredApplicants = this.applicants.filter((item) => {
      const term = this.searchTerm.toLowerCase();
      return (
        item.name.toLowerCase().includes(term) ||
        item.address.toLowerCase().includes(term) ||
        item.emailAddress.toLowerCase().includes(term) ||
        item.familyName.toLowerCase().includes(term)
      );
    });
  }

  public delete(id: number, name: string): void {
    this.dialogService
      .openConfirm({
        title: 'base.confirm_deletion',
        text: 'base.data_will_be_deleted',
        value: name,
      })
      .whenClosed((result) => {
        if (!result.wasCancelled) {
          this.isRequesting = true;
          this.dataService
            .delete(`app/applicant/${id}`)
            .then(() => {
              this.loadData();
            })
            .catch((error) => {
              // 
            })
            .finally(() => {
              this.isRequesting = false;
            });
        } else {
          // operation is canceled
        }
      });
  }
}
