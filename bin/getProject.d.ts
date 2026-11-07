import * as pulumi from "@pulumi/pulumi";
export declare function getProject(args?: GetProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectResult>;
/**
 * A collection of arguments for invoking getProject.
 */
export interface GetProjectArgs {
    id?: number;
    slug?: string;
    teamId?: number;
    teamSlug?: string;
}
/**
 * A collection of values returned by getProject.
 */
export interface GetProjectResult {
    readonly createTime: number;
    readonly devDeploymentName: string;
    readonly id: number;
    readonly name: string;
    readonly prodDeploymentName: string;
    readonly slug: string;
    readonly teamId: number;
    readonly teamSlug: string;
}
export declare function getProjectOutput(args?: GetProjectOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProjectResult>;
/**
 * A collection of arguments for invoking getProject.
 */
export interface GetProjectOutputArgs {
    id?: pulumi.Input<number>;
    slug?: pulumi.Input<string>;
    teamId?: pulumi.Input<number>;
    teamSlug?: pulumi.Input<string>;
}
