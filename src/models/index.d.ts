import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from '@aws-amplify/datastore';
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from '@aws-amplify/datastore';

type EagerProject = {
	readonly [__modelMeta__]: {
		identifier: ManagedIdentifier<Project, 'id'>;
		readOnlyFields: 'createdAt' | 'updatedAt';
	};
	readonly id: string;
	readonly index?: number | null;
	readonly title?: string | null;
	readonly repo_url?: string | null;
	readonly live_url?: string | null;
	readonly thumbnail?: string | null;
	readonly summary?: string | null;
	readonly createdAt?: string | null;
	readonly updatedAt?: string | null;
};

type LazyProject = {
	readonly [__modelMeta__]: {
		identifier: ManagedIdentifier<Project, 'id'>;
		readOnlyFields: 'createdAt' | 'updatedAt';
	};
	readonly id: string;
	readonly index?: number | null;
	readonly title?: string | null;
	readonly repo_url?: string | null;
	readonly live_url?: string | null;
	readonly thumbnail?: string | null;
	readonly summary?: string | null;
	readonly createdAt?: string | null;
	readonly updatedAt?: string | null;
};

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject;

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
	copyOf(
		source: Project,
		mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void
	): Project;
};
