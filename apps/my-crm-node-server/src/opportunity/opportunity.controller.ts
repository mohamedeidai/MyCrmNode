import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OpportunityService } from "./opportunity.service";
import { OpportunityControllerBase } from "./base/opportunity.controller.base";

@swagger.ApiTags("opportunities")
@common.Controller("opportunities")
export class OpportunityController extends OpportunityControllerBase {
  constructor(
    protected readonly service: OpportunityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
