import * as pulumi from "@pulumi/pulumi";
export declare class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectState, opts?: pulumi.CustomResourceOptions): Project;
    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Project;
    /**
     * Creation timestamp, in milliseconds since the Unix epoch.
     */
    readonly createTime: pulumi.Output<number>;
    /**
     * Name of the requesting member's default development deployment for this project, if one exists.
     */
    readonly devDeploymentName: pulumi.Output<string>;
    /**
     * Full name of the project as it appears in the dashboard. Spaces and punctuation are allowed.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Name of the project's default production deployment, if one exists (for example `happy-otter-123`).
     */
    readonly prodDeploymentName: pulumi.Output<string>;
    /**
     * Numeric identifier of the project.
     */
    readonly projectId: pulumi.Output<number>;
    /**
     * Short name used in Convex dashboard URLs. Generated from <span pulumi-lang-nodejs="`name`" pulumi-lang-dotnet="`Name`" pulumi-lang-go="`name`" pulumi-lang-python="`name`" pulumi-lang-yaml="`name`" pulumi-lang-java="`name`" pulumi-lang-hcl="`name`">`name`</span> when not set. Note that Convex assigns the slug at creation time, so setting this on a new project results in a second API call to rename it.
     */
    readonly slug: pulumi.Output<string>;
    /**
     * Numeric identifier of the team that owns the project. Changing this forces a new project, since Convex cannot move a project between teams.
     */
    readonly teamId: pulumi.Output<number>;
    /**
     * Slug of the team that owns the project.
     */
    readonly teamSlug: pulumi.Output<string>;
    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Project resources.
 */
export interface ProjectState {
    /**
     * Creation timestamp, in milliseconds since the Unix epoch.
     */
    createTime?: pulumi.Input<number>;
    /**
     * Name of the requesting member's default development deployment for this project, if one exists.
     */
    devDeploymentName?: pulumi.Input<string>;
    /**
     * Full name of the project as it appears in the dashboard. Spaces and punctuation are allowed.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the project's default production deployment, if one exists (for example `happy-otter-123`).
     */
    prodDeploymentName?: pulumi.Input<string>;
    /**
     * Numeric identifier of the project.
     */
    projectId?: pulumi.Input<number>;
    /**
     * Short name used in Convex dashboard URLs. Generated from <span pulumi-lang-nodejs="`name`" pulumi-lang-dotnet="`Name`" pulumi-lang-go="`name`" pulumi-lang-python="`name`" pulumi-lang-yaml="`name`" pulumi-lang-java="`name`" pulumi-lang-hcl="`name`">`name`</span> when not set. Note that Convex assigns the slug at creation time, so setting this on a new project results in a second API call to rename it.
     */
    slug?: pulumi.Input<string>;
    /**
     * Numeric identifier of the team that owns the project. Changing this forces a new project, since Convex cannot move a project between teams.
     */
    teamId?: pulumi.Input<number>;
    /**
     * Slug of the team that owns the project.
     */
    teamSlug?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * Full name of the project as it appears in the dashboard. Spaces and punctuation are allowed.
     */
    name?: pulumi.Input<string>;
    /**
     * Short name used in Convex dashboard URLs. Generated from <span pulumi-lang-nodejs="`name`" pulumi-lang-dotnet="`Name`" pulumi-lang-go="`name`" pulumi-lang-python="`name`" pulumi-lang-yaml="`name`" pulumi-lang-java="`name`" pulumi-lang-hcl="`name`">`name`</span> when not set. Note that Convex assigns the slug at creation time, so setting this on a new project results in a second API call to rename it.
     */
    slug?: pulumi.Input<string>;
    /**
     * Numeric identifier of the team that owns the project. Changing this forces a new project, since Convex cannot move a project between teams.
     */
    teamId: pulumi.Input<number>;
}
