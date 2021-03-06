import { Application } from "./application.model";

export class Job {
  constructor(
    public company?: string,
    public range?: string,
    public description?: string,
    public website?: string,
    public viewMoreOpen?: boolean,
    public applications?: Application[]
  ) {}
}
