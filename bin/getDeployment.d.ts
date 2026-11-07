import * as pulumi from "@pulumi/pulumi";
export declare function getDeployment(args?: GetDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentResult>;
/**
 * A collection of arguments for invoking getDeployment.
 */
export interface GetDeploymentArgs {
    defaultDev?: boolean;
    defaultProd?: boolean;
    name?: string;
    projectId?: number;
    reference?: string;
}
/**
 * A collection of values returned by getDeployment.
 */
export interface GetDeploymentResult {
    readonly class: string;
    readonly createTime: number;
    readonly creator: number;
    readonly dashboardEditConfirmation: boolean;
    readonly defaultDev?: boolean;
    readonly defaultProd?: boolean;
    readonly deploymentType: string;
    readonly deploymentUrl: string;
    readonly expiresAt: number;
    readonly id: number;
    readonly isDefault: boolean;
    readonly lastDeployTime: number;
    readonly name: string;
    readonly previewIdentifier: string;
    readonly projectId: number;
    readonly reference: string;
    readonly region: string;
    readonly sendLogsToClient: boolean;
}
export declare function getDeploymentOutput(args?: GetDeploymentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDeploymentResult>;
/**
 * A collection of arguments for invoking getDeployment.
 */
export interface GetDeploymentOutputArgs {
    defaultDev?: pulumi.Input<boolean>;
    defaultProd?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    reference?: pulumi.Input<string>;
}
