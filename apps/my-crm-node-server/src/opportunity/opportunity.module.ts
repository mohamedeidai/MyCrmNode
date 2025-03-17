import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OpportunityModuleBase } from "./base/opportunity.module.base";
import { OpportunityService } from "./opportunity.service";
import { OpportunityController } from "./opportunity.controller";
import { OpportunityResolver } from "./opportunity.resolver";

@Module({
  imports: [OpportunityModuleBase, forwardRef(() => AuthModule)],
  controllers: [OpportunityController],
  providers: [OpportunityService, OpportunityResolver],
  exports: [OpportunityService],
})
export class OpportunityModule {}
