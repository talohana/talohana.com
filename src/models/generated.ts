export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any };
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  readonly toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Boolean']>;
  readonly ne?: Maybe<Scalars['Boolean']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Date']>;
  readonly ne?: Maybe<Scalars['Date']>;
  readonly gt?: Maybe<Scalars['Date']>;
  readonly gte?: Maybe<Scalars['Date']>;
  readonly lt?: Maybe<Scalars['Date']>;
  readonly lte?: Maybe<Scalars['Date']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  readonly __typename?: 'Directory';
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly blksize?: Maybe<Scalars['Int']>;
  readonly blocks?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  readonly __typename?: 'DirectoryConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  readonly __typename?: 'DirectoryEdge';
  readonly next?: Maybe<Directory>;
  readonly node: Directory;
  readonly previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type DirectoryFilterInput = {
  readonly sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  readonly absolutePath?: Maybe<StringQueryOperatorInput>;
  readonly relativePath?: Maybe<StringQueryOperatorInput>;
  readonly extension?: Maybe<StringQueryOperatorInput>;
  readonly size?: Maybe<IntQueryOperatorInput>;
  readonly prettySize?: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime?: Maybe<DateQueryOperatorInput>;
  readonly accessTime?: Maybe<DateQueryOperatorInput>;
  readonly changeTime?: Maybe<DateQueryOperatorInput>;
  readonly birthTime?: Maybe<DateQueryOperatorInput>;
  readonly root?: Maybe<StringQueryOperatorInput>;
  readonly dir?: Maybe<StringQueryOperatorInput>;
  readonly base?: Maybe<StringQueryOperatorInput>;
  readonly ext?: Maybe<StringQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory?: Maybe<StringQueryOperatorInput>;
  readonly dev?: Maybe<IntQueryOperatorInput>;
  readonly mode?: Maybe<IntQueryOperatorInput>;
  readonly nlink?: Maybe<IntQueryOperatorInput>;
  readonly uid?: Maybe<IntQueryOperatorInput>;
  readonly gid?: Maybe<IntQueryOperatorInput>;
  readonly rdev?: Maybe<IntQueryOperatorInput>;
  readonly ino?: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly atime?: Maybe<DateQueryOperatorInput>;
  readonly mtime?: Maybe<DateQueryOperatorInput>;
  readonly ctime?: Maybe<DateQueryOperatorInput>;
  readonly birthtime?: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly blksize?: Maybe<IntQueryOperatorInput>;
  readonly blocks?: Maybe<IntQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  readonly __typename?: 'DirectoryGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  readonly __typename?: 'File';
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly blksize?: Maybe<Scalars['Int']>;
  readonly blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL?: Maybe<Scalars['String']>;
  readonly childImageSharp?: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly childMdx?: Maybe<Mdx>;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  readonly __typename?: 'FileConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  readonly __typename?: 'FileEdge';
  readonly next?: Maybe<File>;
  readonly node: File;
  readonly previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp___resolutions___base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp___resolutions___tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp___resolutions___aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp___resolutions___width',
  childImageSharp___resolutions___height = 'childImageSharp___resolutions___height',
  childImageSharp___resolutions___src = 'childImageSharp___resolutions___src',
  childImageSharp___resolutions___srcSet = 'childImageSharp___resolutions___srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp___resolutions___srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp___resolutions___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp___sizes___base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp___sizes___tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp___sizes___aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp___sizes___src',
  childImageSharp___sizes___srcSet = 'childImageSharp___sizes___srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp___sizes___srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp___sizes___sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp___sizes___originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp___sizes___originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp___sizes___presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp___sizes___presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  childMdx___rawBody = 'childMdx___rawBody',
  childMdx___fileAbsolutePath = 'childMdx___fileAbsolutePath',
  childMdx___frontmatter___title = 'childMdx___frontmatter___title',
  childMdx___frontmatter___slug = 'childMdx___frontmatter___slug',
  childMdx___frontmatter___description = 'childMdx___frontmatter___description',
  childMdx___frontmatter___categories = 'childMdx___frontmatter___categories',
  childMdx___frontmatter___date = 'childMdx___frontmatter___date',
  childMdx___frontmatter___banner___sourceInstanceName = 'childMdx___frontmatter___banner___sourceInstanceName',
  childMdx___frontmatter___banner___absolutePath = 'childMdx___frontmatter___banner___absolutePath',
  childMdx___frontmatter___banner___relativePath = 'childMdx___frontmatter___banner___relativePath',
  childMdx___frontmatter___banner___extension = 'childMdx___frontmatter___banner___extension',
  childMdx___frontmatter___banner___size = 'childMdx___frontmatter___banner___size',
  childMdx___frontmatter___banner___prettySize = 'childMdx___frontmatter___banner___prettySize',
  childMdx___frontmatter___banner___modifiedTime = 'childMdx___frontmatter___banner___modifiedTime',
  childMdx___frontmatter___banner___accessTime = 'childMdx___frontmatter___banner___accessTime',
  childMdx___frontmatter___banner___changeTime = 'childMdx___frontmatter___banner___changeTime',
  childMdx___frontmatter___banner___birthTime = 'childMdx___frontmatter___banner___birthTime',
  childMdx___frontmatter___banner___root = 'childMdx___frontmatter___banner___root',
  childMdx___frontmatter___banner___dir = 'childMdx___frontmatter___banner___dir',
  childMdx___frontmatter___banner___base = 'childMdx___frontmatter___banner___base',
  childMdx___frontmatter___banner___ext = 'childMdx___frontmatter___banner___ext',
  childMdx___frontmatter___banner___name = 'childMdx___frontmatter___banner___name',
  childMdx___frontmatter___banner___relativeDirectory = 'childMdx___frontmatter___banner___relativeDirectory',
  childMdx___frontmatter___banner___dev = 'childMdx___frontmatter___banner___dev',
  childMdx___frontmatter___banner___mode = 'childMdx___frontmatter___banner___mode',
  childMdx___frontmatter___banner___nlink = 'childMdx___frontmatter___banner___nlink',
  childMdx___frontmatter___banner___uid = 'childMdx___frontmatter___banner___uid',
  childMdx___frontmatter___banner___gid = 'childMdx___frontmatter___banner___gid',
  childMdx___frontmatter___banner___rdev = 'childMdx___frontmatter___banner___rdev',
  childMdx___frontmatter___banner___ino = 'childMdx___frontmatter___banner___ino',
  childMdx___frontmatter___banner___atimeMs = 'childMdx___frontmatter___banner___atimeMs',
  childMdx___frontmatter___banner___mtimeMs = 'childMdx___frontmatter___banner___mtimeMs',
  childMdx___frontmatter___banner___ctimeMs = 'childMdx___frontmatter___banner___ctimeMs',
  childMdx___frontmatter___banner___atime = 'childMdx___frontmatter___banner___atime',
  childMdx___frontmatter___banner___mtime = 'childMdx___frontmatter___banner___mtime',
  childMdx___frontmatter___banner___ctime = 'childMdx___frontmatter___banner___ctime',
  childMdx___frontmatter___banner___birthtime = 'childMdx___frontmatter___banner___birthtime',
  childMdx___frontmatter___banner___birthtimeMs = 'childMdx___frontmatter___banner___birthtimeMs',
  childMdx___frontmatter___banner___blksize = 'childMdx___frontmatter___banner___blksize',
  childMdx___frontmatter___banner___blocks = 'childMdx___frontmatter___banner___blocks',
  childMdx___frontmatter___banner___publicURL = 'childMdx___frontmatter___banner___publicURL',
  childMdx___frontmatter___banner___id = 'childMdx___frontmatter___banner___id',
  childMdx___frontmatter___banner___children = 'childMdx___frontmatter___banner___children',
  childMdx___frontmatter___bannerCredit = 'childMdx___frontmatter___bannerCredit',
  childMdx___frontmatter___bannerCreditUrl = 'childMdx___frontmatter___bannerCreditUrl',
  childMdx___slug = 'childMdx___slug',
  childMdx___body = 'childMdx___body',
  childMdx___excerpt = 'childMdx___excerpt',
  childMdx___headings = 'childMdx___headings',
  childMdx___headings___value = 'childMdx___headings___value',
  childMdx___headings___depth = 'childMdx___headings___depth',
  childMdx___html = 'childMdx___html',
  childMdx___mdxAST = 'childMdx___mdxAST',
  childMdx___tableOfContents = 'childMdx___tableOfContents',
  childMdx___timeToRead = 'childMdx___timeToRead',
  childMdx___wordCount___paragraphs = 'childMdx___wordCount___paragraphs',
  childMdx___wordCount___sentences = 'childMdx___wordCount___sentences',
  childMdx___wordCount___words = 'childMdx___wordCount___words',
  childMdx___fields___id = 'childMdx___fields___id',
  childMdx___fields___title = 'childMdx___fields___title',
  childMdx___fields___description = 'childMdx___fields___description',
  childMdx___fields___slug = 'childMdx___fields___slug',
  childMdx___fields___date = 'childMdx___fields___date',
  childMdx___fields___banner___sourceInstanceName = 'childMdx___fields___banner___sourceInstanceName',
  childMdx___fields___banner___absolutePath = 'childMdx___fields___banner___absolutePath',
  childMdx___fields___banner___relativePath = 'childMdx___fields___banner___relativePath',
  childMdx___fields___banner___extension = 'childMdx___fields___banner___extension',
  childMdx___fields___banner___size = 'childMdx___fields___banner___size',
  childMdx___fields___banner___prettySize = 'childMdx___fields___banner___prettySize',
  childMdx___fields___banner___modifiedTime = 'childMdx___fields___banner___modifiedTime',
  childMdx___fields___banner___accessTime = 'childMdx___fields___banner___accessTime',
  childMdx___fields___banner___changeTime = 'childMdx___fields___banner___changeTime',
  childMdx___fields___banner___birthTime = 'childMdx___fields___banner___birthTime',
  childMdx___fields___banner___root = 'childMdx___fields___banner___root',
  childMdx___fields___banner___dir = 'childMdx___fields___banner___dir',
  childMdx___fields___banner___base = 'childMdx___fields___banner___base',
  childMdx___fields___banner___ext = 'childMdx___fields___banner___ext',
  childMdx___fields___banner___name = 'childMdx___fields___banner___name',
  childMdx___fields___banner___relativeDirectory = 'childMdx___fields___banner___relativeDirectory',
  childMdx___fields___banner___dev = 'childMdx___fields___banner___dev',
  childMdx___fields___banner___mode = 'childMdx___fields___banner___mode',
  childMdx___fields___banner___nlink = 'childMdx___fields___banner___nlink',
  childMdx___fields___banner___uid = 'childMdx___fields___banner___uid',
  childMdx___fields___banner___gid = 'childMdx___fields___banner___gid',
  childMdx___fields___banner___rdev = 'childMdx___fields___banner___rdev',
  childMdx___fields___banner___ino = 'childMdx___fields___banner___ino',
  childMdx___fields___banner___atimeMs = 'childMdx___fields___banner___atimeMs',
  childMdx___fields___banner___mtimeMs = 'childMdx___fields___banner___mtimeMs',
  childMdx___fields___banner___ctimeMs = 'childMdx___fields___banner___ctimeMs',
  childMdx___fields___banner___atime = 'childMdx___fields___banner___atime',
  childMdx___fields___banner___mtime = 'childMdx___fields___banner___mtime',
  childMdx___fields___banner___ctime = 'childMdx___fields___banner___ctime',
  childMdx___fields___banner___birthtime = 'childMdx___fields___banner___birthtime',
  childMdx___fields___banner___birthtimeMs = 'childMdx___fields___banner___birthtimeMs',
  childMdx___fields___banner___blksize = 'childMdx___fields___banner___blksize',
  childMdx___fields___banner___blocks = 'childMdx___fields___banner___blocks',
  childMdx___fields___banner___publicURL = 'childMdx___fields___banner___publicURL',
  childMdx___fields___banner___id = 'childMdx___fields___banner___id',
  childMdx___fields___banner___children = 'childMdx___fields___banner___children',
  childMdx___fields___bannerCredit = 'childMdx___fields___bannerCredit',
  childMdx___fields___bannerCreditUrl = 'childMdx___fields___bannerCreditUrl',
  childMdx___fields___categories = 'childMdx___fields___categories',
  childMdx___id = 'childMdx___id',
  childMdx___parent___id = 'childMdx___parent___id',
  childMdx___parent___parent___id = 'childMdx___parent___parent___id',
  childMdx___parent___parent___children = 'childMdx___parent___parent___children',
  childMdx___parent___children = 'childMdx___parent___children',
  childMdx___parent___children___id = 'childMdx___parent___children___id',
  childMdx___parent___children___children = 'childMdx___parent___children___children',
  childMdx___parent___internal___content = 'childMdx___parent___internal___content',
  childMdx___parent___internal___contentDigest = 'childMdx___parent___internal___contentDigest',
  childMdx___parent___internal___description = 'childMdx___parent___internal___description',
  childMdx___parent___internal___fieldOwners = 'childMdx___parent___internal___fieldOwners',
  childMdx___parent___internal___ignoreType = 'childMdx___parent___internal___ignoreType',
  childMdx___parent___internal___mediaType = 'childMdx___parent___internal___mediaType',
  childMdx___parent___internal___owner = 'childMdx___parent___internal___owner',
  childMdx___parent___internal___type = 'childMdx___parent___internal___type',
  childMdx___children = 'childMdx___children',
  childMdx___children___id = 'childMdx___children___id',
  childMdx___children___parent___id = 'childMdx___children___parent___id',
  childMdx___children___parent___children = 'childMdx___children___parent___children',
  childMdx___children___children = 'childMdx___children___children',
  childMdx___children___children___id = 'childMdx___children___children___id',
  childMdx___children___children___children = 'childMdx___children___children___children',
  childMdx___children___internal___content = 'childMdx___children___internal___content',
  childMdx___children___internal___contentDigest = 'childMdx___children___internal___contentDigest',
  childMdx___children___internal___description = 'childMdx___children___internal___description',
  childMdx___children___internal___fieldOwners = 'childMdx___children___internal___fieldOwners',
  childMdx___children___internal___ignoreType = 'childMdx___children___internal___ignoreType',
  childMdx___children___internal___mediaType = 'childMdx___children___internal___mediaType',
  childMdx___children___internal___owner = 'childMdx___children___internal___owner',
  childMdx___children___internal___type = 'childMdx___children___internal___type',
  childMdx___internal___content = 'childMdx___internal___content',
  childMdx___internal___contentDigest = 'childMdx___internal___contentDigest',
  childMdx___internal___description = 'childMdx___internal___description',
  childMdx___internal___fieldOwners = 'childMdx___internal___fieldOwners',
  childMdx___internal___ignoreType = 'childMdx___internal___ignoreType',
  childMdx___internal___mediaType = 'childMdx___internal___mediaType',
  childMdx___internal___owner = 'childMdx___internal___owner',
  childMdx___internal___type = 'childMdx___internal___type',
}

export type FileFilterInput = {
  readonly sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  readonly absolutePath?: Maybe<StringQueryOperatorInput>;
  readonly relativePath?: Maybe<StringQueryOperatorInput>;
  readonly extension?: Maybe<StringQueryOperatorInput>;
  readonly size?: Maybe<IntQueryOperatorInput>;
  readonly prettySize?: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime?: Maybe<DateQueryOperatorInput>;
  readonly accessTime?: Maybe<DateQueryOperatorInput>;
  readonly changeTime?: Maybe<DateQueryOperatorInput>;
  readonly birthTime?: Maybe<DateQueryOperatorInput>;
  readonly root?: Maybe<StringQueryOperatorInput>;
  readonly dir?: Maybe<StringQueryOperatorInput>;
  readonly base?: Maybe<StringQueryOperatorInput>;
  readonly ext?: Maybe<StringQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory?: Maybe<StringQueryOperatorInput>;
  readonly dev?: Maybe<IntQueryOperatorInput>;
  readonly mode?: Maybe<IntQueryOperatorInput>;
  readonly nlink?: Maybe<IntQueryOperatorInput>;
  readonly uid?: Maybe<IntQueryOperatorInput>;
  readonly gid?: Maybe<IntQueryOperatorInput>;
  readonly rdev?: Maybe<IntQueryOperatorInput>;
  readonly ino?: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly atime?: Maybe<DateQueryOperatorInput>;
  readonly mtime?: Maybe<DateQueryOperatorInput>;
  readonly ctime?: Maybe<DateQueryOperatorInput>;
  readonly birthtime?: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly blksize?: Maybe<IntQueryOperatorInput>;
  readonly blocks?: Maybe<IntQueryOperatorInput>;
  readonly publicURL?: Maybe<StringQueryOperatorInput>;
  readonly childImageSharp?: Maybe<ImageSharpFilterInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
  readonly childMdx?: Maybe<MdxFilterInput>;
};

export type FileGroupConnection = {
  readonly __typename?: 'FileGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Float']>;
  readonly ne?: Maybe<Scalars['Float']>;
  readonly gt?: Maybe<Scalars['Float']>;
  readonly gte?: Maybe<Scalars['Float']>;
  readonly lt?: Maybe<Scalars['Float']>;
  readonly lte?: Maybe<Scalars['Float']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

export enum HeadingsMdx {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION',
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE',
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export enum ImageLayout {
  FIXED = 'FIXED',
  FLUID = 'FLUID',
  CONSTRAINED = 'CONSTRAINED',
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE',
}

export type ImageSharp = Node & {
  readonly __typename?: 'ImageSharp';
  readonly fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions?: Maybe<ImageSharpResolutions>;
  readonly fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes?: Maybe<ImageSharpSizes>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original?: Maybe<ImageSharpOriginal>;
  readonly resize?: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  transformOptions?: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  readonly __typename?: 'ImageSharpConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  readonly __typename?: 'ImageSharpEdge';
  readonly next?: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  sizes___presentationWidth = 'sizes___presentationWidth',
  sizes___presentationHeight = 'sizes___presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type ImageSharpFilterInput = {
  readonly fixed?: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid?: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes?: Maybe<ImageSharpSizesFilterInput>;
  readonly gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  readonly original?: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize?: Maybe<ImageSharpResizeFilterInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  readonly __typename?: 'ImageSharpFixed';
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>;
  readonly width?: Maybe<FloatQueryOperatorInput>;
  readonly height?: Maybe<FloatQueryOperatorInput>;
  readonly src?: Maybe<StringQueryOperatorInput>;
  readonly srcSet?: Maybe<StringQueryOperatorInput>;
  readonly srcWebp?: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>;
  readonly originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  readonly __typename?: 'ImageSharpFluid';
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>;
  readonly src?: Maybe<StringQueryOperatorInput>;
  readonly srcSet?: Maybe<StringQueryOperatorInput>;
  readonly srcWebp?: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>;
  readonly sizes?: Maybe<StringQueryOperatorInput>;
  readonly originalImg?: Maybe<StringQueryOperatorInput>;
  readonly originalName?: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth?: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  readonly __typename?: 'ImageSharpGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  readonly __typename?: 'ImageSharpOriginal';
  readonly width?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  readonly width?: Maybe<FloatQueryOperatorInput>;
  readonly height?: Maybe<FloatQueryOperatorInput>;
  readonly src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  readonly __typename?: 'ImageSharpResize';
  readonly src?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  readonly src?: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>;
  readonly width?: Maybe<IntQueryOperatorInput>;
  readonly height?: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>;
  readonly originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  readonly __typename?: 'ImageSharpResolutions';
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>;
  readonly width?: Maybe<FloatQueryOperatorInput>;
  readonly height?: Maybe<FloatQueryOperatorInput>;
  readonly src?: Maybe<StringQueryOperatorInput>;
  readonly srcSet?: Maybe<StringQueryOperatorInput>;
  readonly srcWebp?: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>;
  readonly originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  readonly __typename?: 'ImageSharpSizes';
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>;
  readonly src?: Maybe<StringQueryOperatorInput>;
  readonly srcSet?: Maybe<StringQueryOperatorInput>;
  readonly srcWebp?: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>;
  readonly sizes?: Maybe<StringQueryOperatorInput>;
  readonly originalImg?: Maybe<StringQueryOperatorInput>;
  readonly originalName?: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth?: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  readonly __typename?: 'Internal';
  readonly content?: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly fieldOwners?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType?: Maybe<Scalars['Boolean']>;
  readonly mediaType?: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

export type InternalFilterInput = {
  readonly content?: Maybe<StringQueryOperatorInput>;
  readonly contentDigest?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners?: Maybe<StringQueryOperatorInput>;
  readonly ignoreType?: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType?: Maybe<StringQueryOperatorInput>;
  readonly owner?: Maybe<StringQueryOperatorInput>;
  readonly type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Int']>;
  readonly ne?: Maybe<Scalars['Int']>;
  readonly gt?: Maybe<Scalars['Int']>;
  readonly gte?: Maybe<Scalars['Int']>;
  readonly lt?: Maybe<Scalars['Int']>;
  readonly lte?: Maybe<Scalars['Int']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  readonly quality?: Maybe<Scalars['Int']>;
  readonly progressive?: Maybe<Scalars['Boolean']>;
};

export type JsonQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['JSON']>;
  readonly ne?: Maybe<Scalars['JSON']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex?: Maybe<Scalars['JSON']>;
  readonly glob?: Maybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  readonly __typename?: 'Mdx';
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter?: Maybe<MdxFrontmatter>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings?: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html?: Maybe<Scalars['String']>;
  readonly mdxAST?: Maybe<Scalars['JSON']>;
  readonly tableOfContents?: Maybe<Scalars['JSON']>;
  readonly timeToRead?: Maybe<Scalars['Int']>;
  readonly wordCount?: Maybe<MdxWordCount>;
  readonly fields?: Maybe<MdxFields>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};

export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxConnection = {
  readonly __typename?: 'MdxConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  readonly __typename?: 'MdxEdge';
  readonly next?: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous?: Maybe<Mdx>;
};

export type MdxFields = {
  readonly __typename?: 'MdxFields';
  readonly id?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly date?: Maybe<Scalars['Date']>;
  readonly banner?: Maybe<File>;
  readonly bannerCredit?: Maybe<Scalars['String']>;
  readonly bannerCreditUrl?: Maybe<Scalars['String']>;
  readonly categories?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type MdxFieldsDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export enum MdxFieldsEnum {
  rawBody = 'rawBody',
  fileAbsolutePath = 'fileAbsolutePath',
  frontmatter___title = 'frontmatter___title',
  frontmatter___slug = 'frontmatter___slug',
  frontmatter___description = 'frontmatter___description',
  frontmatter___categories = 'frontmatter___categories',
  frontmatter___date = 'frontmatter___date',
  frontmatter___banner___sourceInstanceName = 'frontmatter___banner___sourceInstanceName',
  frontmatter___banner___absolutePath = 'frontmatter___banner___absolutePath',
  frontmatter___banner___relativePath = 'frontmatter___banner___relativePath',
  frontmatter___banner___extension = 'frontmatter___banner___extension',
  frontmatter___banner___size = 'frontmatter___banner___size',
  frontmatter___banner___prettySize = 'frontmatter___banner___prettySize',
  frontmatter___banner___modifiedTime = 'frontmatter___banner___modifiedTime',
  frontmatter___banner___accessTime = 'frontmatter___banner___accessTime',
  frontmatter___banner___changeTime = 'frontmatter___banner___changeTime',
  frontmatter___banner___birthTime = 'frontmatter___banner___birthTime',
  frontmatter___banner___root = 'frontmatter___banner___root',
  frontmatter___banner___dir = 'frontmatter___banner___dir',
  frontmatter___banner___base = 'frontmatter___banner___base',
  frontmatter___banner___ext = 'frontmatter___banner___ext',
  frontmatter___banner___name = 'frontmatter___banner___name',
  frontmatter___banner___relativeDirectory = 'frontmatter___banner___relativeDirectory',
  frontmatter___banner___dev = 'frontmatter___banner___dev',
  frontmatter___banner___mode = 'frontmatter___banner___mode',
  frontmatter___banner___nlink = 'frontmatter___banner___nlink',
  frontmatter___banner___uid = 'frontmatter___banner___uid',
  frontmatter___banner___gid = 'frontmatter___banner___gid',
  frontmatter___banner___rdev = 'frontmatter___banner___rdev',
  frontmatter___banner___ino = 'frontmatter___banner___ino',
  frontmatter___banner___atimeMs = 'frontmatter___banner___atimeMs',
  frontmatter___banner___mtimeMs = 'frontmatter___banner___mtimeMs',
  frontmatter___banner___ctimeMs = 'frontmatter___banner___ctimeMs',
  frontmatter___banner___atime = 'frontmatter___banner___atime',
  frontmatter___banner___mtime = 'frontmatter___banner___mtime',
  frontmatter___banner___ctime = 'frontmatter___banner___ctime',
  frontmatter___banner___birthtime = 'frontmatter___banner___birthtime',
  frontmatter___banner___birthtimeMs = 'frontmatter___banner___birthtimeMs',
  frontmatter___banner___blksize = 'frontmatter___banner___blksize',
  frontmatter___banner___blocks = 'frontmatter___banner___blocks',
  frontmatter___banner___publicURL = 'frontmatter___banner___publicURL',
  frontmatter___banner___childImageSharp___gatsbyImageData = 'frontmatter___banner___childImageSharp___gatsbyImageData',
  frontmatter___banner___childImageSharp___id = 'frontmatter___banner___childImageSharp___id',
  frontmatter___banner___childImageSharp___children = 'frontmatter___banner___childImageSharp___children',
  frontmatter___banner___id = 'frontmatter___banner___id',
  frontmatter___banner___parent___id = 'frontmatter___banner___parent___id',
  frontmatter___banner___parent___children = 'frontmatter___banner___parent___children',
  frontmatter___banner___children = 'frontmatter___banner___children',
  frontmatter___banner___children___id = 'frontmatter___banner___children___id',
  frontmatter___banner___children___children = 'frontmatter___banner___children___children',
  frontmatter___banner___internal___content = 'frontmatter___banner___internal___content',
  frontmatter___banner___internal___contentDigest = 'frontmatter___banner___internal___contentDigest',
  frontmatter___banner___internal___description = 'frontmatter___banner___internal___description',
  frontmatter___banner___internal___fieldOwners = 'frontmatter___banner___internal___fieldOwners',
  frontmatter___banner___internal___ignoreType = 'frontmatter___banner___internal___ignoreType',
  frontmatter___banner___internal___mediaType = 'frontmatter___banner___internal___mediaType',
  frontmatter___banner___internal___owner = 'frontmatter___banner___internal___owner',
  frontmatter___banner___internal___type = 'frontmatter___banner___internal___type',
  frontmatter___banner___childMdx___rawBody = 'frontmatter___banner___childMdx___rawBody',
  frontmatter___banner___childMdx___fileAbsolutePath = 'frontmatter___banner___childMdx___fileAbsolutePath',
  frontmatter___banner___childMdx___slug = 'frontmatter___banner___childMdx___slug',
  frontmatter___banner___childMdx___body = 'frontmatter___banner___childMdx___body',
  frontmatter___banner___childMdx___excerpt = 'frontmatter___banner___childMdx___excerpt',
  frontmatter___banner___childMdx___headings = 'frontmatter___banner___childMdx___headings',
  frontmatter___banner___childMdx___html = 'frontmatter___banner___childMdx___html',
  frontmatter___banner___childMdx___mdxAST = 'frontmatter___banner___childMdx___mdxAST',
  frontmatter___banner___childMdx___tableOfContents = 'frontmatter___banner___childMdx___tableOfContents',
  frontmatter___banner___childMdx___timeToRead = 'frontmatter___banner___childMdx___timeToRead',
  frontmatter___banner___childMdx___id = 'frontmatter___banner___childMdx___id',
  frontmatter___banner___childMdx___children = 'frontmatter___banner___childMdx___children',
  frontmatter___bannerCredit = 'frontmatter___bannerCredit',
  frontmatter___bannerCreditUrl = 'frontmatter___bannerCreditUrl',
  slug = 'slug',
  body = 'body',
  excerpt = 'excerpt',
  headings = 'headings',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  html = 'html',
  mdxAST = 'mdxAST',
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  fields___id = 'fields___id',
  fields___title = 'fields___title',
  fields___description = 'fields___description',
  fields___slug = 'fields___slug',
  fields___date = 'fields___date',
  fields___banner___sourceInstanceName = 'fields___banner___sourceInstanceName',
  fields___banner___absolutePath = 'fields___banner___absolutePath',
  fields___banner___relativePath = 'fields___banner___relativePath',
  fields___banner___extension = 'fields___banner___extension',
  fields___banner___size = 'fields___banner___size',
  fields___banner___prettySize = 'fields___banner___prettySize',
  fields___banner___modifiedTime = 'fields___banner___modifiedTime',
  fields___banner___accessTime = 'fields___banner___accessTime',
  fields___banner___changeTime = 'fields___banner___changeTime',
  fields___banner___birthTime = 'fields___banner___birthTime',
  fields___banner___root = 'fields___banner___root',
  fields___banner___dir = 'fields___banner___dir',
  fields___banner___base = 'fields___banner___base',
  fields___banner___ext = 'fields___banner___ext',
  fields___banner___name = 'fields___banner___name',
  fields___banner___relativeDirectory = 'fields___banner___relativeDirectory',
  fields___banner___dev = 'fields___banner___dev',
  fields___banner___mode = 'fields___banner___mode',
  fields___banner___nlink = 'fields___banner___nlink',
  fields___banner___uid = 'fields___banner___uid',
  fields___banner___gid = 'fields___banner___gid',
  fields___banner___rdev = 'fields___banner___rdev',
  fields___banner___ino = 'fields___banner___ino',
  fields___banner___atimeMs = 'fields___banner___atimeMs',
  fields___banner___mtimeMs = 'fields___banner___mtimeMs',
  fields___banner___ctimeMs = 'fields___banner___ctimeMs',
  fields___banner___atime = 'fields___banner___atime',
  fields___banner___mtime = 'fields___banner___mtime',
  fields___banner___ctime = 'fields___banner___ctime',
  fields___banner___birthtime = 'fields___banner___birthtime',
  fields___banner___birthtimeMs = 'fields___banner___birthtimeMs',
  fields___banner___blksize = 'fields___banner___blksize',
  fields___banner___blocks = 'fields___banner___blocks',
  fields___banner___publicURL = 'fields___banner___publicURL',
  fields___banner___childImageSharp___gatsbyImageData = 'fields___banner___childImageSharp___gatsbyImageData',
  fields___banner___childImageSharp___id = 'fields___banner___childImageSharp___id',
  fields___banner___childImageSharp___children = 'fields___banner___childImageSharp___children',
  fields___banner___id = 'fields___banner___id',
  fields___banner___parent___id = 'fields___banner___parent___id',
  fields___banner___parent___children = 'fields___banner___parent___children',
  fields___banner___children = 'fields___banner___children',
  fields___banner___children___id = 'fields___banner___children___id',
  fields___banner___children___children = 'fields___banner___children___children',
  fields___banner___internal___content = 'fields___banner___internal___content',
  fields___banner___internal___contentDigest = 'fields___banner___internal___contentDigest',
  fields___banner___internal___description = 'fields___banner___internal___description',
  fields___banner___internal___fieldOwners = 'fields___banner___internal___fieldOwners',
  fields___banner___internal___ignoreType = 'fields___banner___internal___ignoreType',
  fields___banner___internal___mediaType = 'fields___banner___internal___mediaType',
  fields___banner___internal___owner = 'fields___banner___internal___owner',
  fields___banner___internal___type = 'fields___banner___internal___type',
  fields___banner___childMdx___rawBody = 'fields___banner___childMdx___rawBody',
  fields___banner___childMdx___fileAbsolutePath = 'fields___banner___childMdx___fileAbsolutePath',
  fields___banner___childMdx___slug = 'fields___banner___childMdx___slug',
  fields___banner___childMdx___body = 'fields___banner___childMdx___body',
  fields___banner___childMdx___excerpt = 'fields___banner___childMdx___excerpt',
  fields___banner___childMdx___headings = 'fields___banner___childMdx___headings',
  fields___banner___childMdx___html = 'fields___banner___childMdx___html',
  fields___banner___childMdx___mdxAST = 'fields___banner___childMdx___mdxAST',
  fields___banner___childMdx___tableOfContents = 'fields___banner___childMdx___tableOfContents',
  fields___banner___childMdx___timeToRead = 'fields___banner___childMdx___timeToRead',
  fields___banner___childMdx___id = 'fields___banner___childMdx___id',
  fields___banner___childMdx___children = 'fields___banner___childMdx___children',
  fields___bannerCredit = 'fields___bannerCredit',
  fields___bannerCreditUrl = 'fields___bannerCreditUrl',
  fields___categories = 'fields___categories',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type MdxFieldsFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly title?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly slug?: Maybe<StringQueryOperatorInput>;
  readonly date?: Maybe<DateQueryOperatorInput>;
  readonly banner?: Maybe<FileFilterInput>;
  readonly bannerCredit?: Maybe<StringQueryOperatorInput>;
  readonly bannerCreditUrl?: Maybe<StringQueryOperatorInput>;
  readonly categories?: Maybe<StringQueryOperatorInput>;
};

export type MdxFilterInput = {
  readonly rawBody?: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  readonly frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  readonly slug?: Maybe<StringQueryOperatorInput>;
  readonly body?: Maybe<StringQueryOperatorInput>;
  readonly excerpt?: Maybe<StringQueryOperatorInput>;
  readonly headings?: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html?: Maybe<StringQueryOperatorInput>;
  readonly mdxAST?: Maybe<JsonQueryOperatorInput>;
  readonly tableOfContents?: Maybe<JsonQueryOperatorInput>;
  readonly timeToRead?: Maybe<IntQueryOperatorInput>;
  readonly wordCount?: Maybe<MdxWordCountFilterInput>;
  readonly fields?: Maybe<MdxFieldsFilterInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type MdxFrontmatter = {
  readonly __typename?: 'MdxFrontmatter';
  readonly title: Scalars['String'];
  readonly slug?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly categories?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly date?: Maybe<Scalars['Date']>;
  readonly banner?: Maybe<File>;
  readonly bannerCredit?: Maybe<Scalars['String']>;
  readonly bannerCreditUrl?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  readonly title?: Maybe<StringQueryOperatorInput>;
  readonly slug?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly categories?: Maybe<StringQueryOperatorInput>;
  readonly date?: Maybe<DateQueryOperatorInput>;
  readonly banner?: Maybe<FileFilterInput>;
  readonly bannerCredit?: Maybe<StringQueryOperatorInput>;
  readonly bannerCreditUrl?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  readonly __typename?: 'MdxGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  readonly __typename?: 'MdxHeadingMdx';
  readonly value?: Maybe<Scalars['String']>;
  readonly depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
  readonly value?: Maybe<StringQueryOperatorInput>;
  readonly depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  readonly elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  readonly __typename?: 'MdxWordCount';
  readonly paragraphs?: Maybe<Scalars['Int']>;
  readonly sentences?: Maybe<Scalars['Int']>;
  readonly words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  readonly paragraphs?: Maybe<IntQueryOperatorInput>;
  readonly sentences?: Maybe<IntQueryOperatorInput>;
  readonly words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type NodeFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  readonly elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  readonly __typename?: 'PageInfo';
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage?: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

export type PngOptions = {
  readonly quality?: Maybe<Scalars['Int']>;
  readonly compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  readonly turnPolicy?: Maybe<PotraceTurnPolicy>;
  readonly turdSize?: Maybe<Scalars['Float']>;
  readonly alphaMax?: Maybe<Scalars['Float']>;
  readonly optCurve?: Maybe<Scalars['Boolean']>;
  readonly optTolerance?: Maybe<Scalars['Float']>;
  readonly threshold?: Maybe<Scalars['Int']>;
  readonly blackOnWhite?: Maybe<Scalars['Boolean']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
}

export type Query = {
  readonly __typename?: 'Query';
  readonly file?: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory?: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site?: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage?: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp?: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly mdx?: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin?: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  readonly __typename?: 'Site';
  readonly buildTime?: Maybe<Scalars['Date']>;
  readonly siteMetadata: SiteSiteMetadata;
  readonly port?: Maybe<Scalars['Int']>;
  readonly host?: Maybe<Scalars['String']>;
  readonly polyfill?: Maybe<Scalars['Boolean']>;
  readonly pathPrefix?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  readonly __typename?: 'SiteBuildMetadata';
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  readonly __typename?: 'SiteBuildMetadataConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  readonly __typename?: 'SiteBuildMetadataEdge';
  readonly next?: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  buildTime = 'buildTime',
}

export type SiteBuildMetadataFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
  readonly buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  readonly __typename?: 'SiteBuildMetadataGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  readonly __typename?: 'SiteConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  readonly __typename?: 'SiteEdge';
  readonly next?: Maybe<Site>;
  readonly node: Site;
  readonly previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___defaultTitle = 'siteMetadata___defaultTitle',
  siteMetadata___titleTemplate = 'siteMetadata___titleTemplate',
  siteMetadata___image = 'siteMetadata___image',
  siteMetadata___lang = 'siteMetadata___lang',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  siteMetadata___twitter = 'siteMetadata___twitter',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type SiteFilterInput = {
  readonly buildTime?: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  readonly port?: Maybe<IntQueryOperatorInput>;
  readonly host?: Maybe<StringQueryOperatorInput>;
  readonly polyfill?: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix?: Maybe<StringQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  readonly __typename?: 'SiteGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  readonly __typename?: 'SitePage';
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath?: Maybe<Scalars['String']>;
  readonly isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  readonly context?: Maybe<SitePageContext>;
  readonly pluginCreator?: Maybe<SitePlugin>;
  readonly pluginCreatorId?: Maybe<Scalars['String']>;
  readonly componentPath?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type SitePageConnection = {
  readonly __typename?: 'SitePageConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  readonly __typename?: 'SitePageContext';
  readonly id?: Maybe<Scalars['String']>;
  readonly prevId?: Maybe<Scalars['String']>;
  readonly nextId?: Maybe<Scalars['String']>;
  readonly frontmatter?: Maybe<SitePageContextFrontmatter>;
};

export type SitePageContextFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly prevId?: Maybe<StringQueryOperatorInput>;
  readonly nextId?: Maybe<StringQueryOperatorInput>;
  readonly frontmatter?: Maybe<SitePageContextFrontmatterFilterInput>;
};

export type SitePageContextFrontmatter = {
  readonly __typename?: 'SitePageContextFrontmatter';
  readonly title?: Maybe<Scalars['String']>;
};

export type SitePageContextFrontmatterFilterInput = {
  readonly title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  readonly __typename?: 'SitePageEdge';
  readonly next?: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___id = 'context___id',
  context___prevId = 'context___prevId',
  context___nextId = 'context___nextId',
  context___frontmatter___title = 'context___frontmatter___title',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___displayName = 'pluginCreator___pluginOptions___displayName',
  pluginCreator___pluginOptions___fileName = 'pluginCreator___pluginOptions___fileName',
  pluginCreator___pluginOptions___minify = 'pluginCreator___pluginOptions___minify',
  pluginCreator___pluginOptions___transpileTemplateLiterals = 'pluginCreator___pluginOptions___transpileTemplateLiterals',
  pluginCreator___pluginOptions___pure = 'pluginCreator___pluginOptions___pure',
  pluginCreator___pluginOptions___pathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator___pluginOptions___base64Width',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator___pluginOptions___failOnError',
  pluginCreator___pluginOptions___maxWidth = 'pluginCreator___pluginOptions___maxWidth',
  pluginCreator___pluginOptions___linkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  pluginCreator___pluginOptions___showCaptions = 'pluginCreator___pluginOptions___showCaptions',
  pluginCreator___pluginOptions___markdownCaptions = 'pluginCreator___pluginOptions___markdownCaptions',
  pluginCreator___pluginOptions___sizeByPixelDensity = 'pluginCreator___pluginOptions___sizeByPixelDensity',
  pluginCreator___pluginOptions___backgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
  pluginCreator___pluginOptions___quality = 'pluginCreator___pluginOptions___quality',
  pluginCreator___pluginOptions___withWebp = 'pluginCreator___pluginOptions___withWebp',
  pluginCreator___pluginOptions___tracedSVG = 'pluginCreator___pluginOptions___tracedSVG',
  pluginCreator___pluginOptions___loading = 'pluginCreator___pluginOptions___loading',
  pluginCreator___pluginOptions___disableBgImageOnAlpha = 'pluginCreator___pluginOptions___disableBgImageOnAlpha',
  pluginCreator___pluginOptions___disableBgImage = 'pluginCreator___pluginOptions___disableBgImage',
  pluginCreator___pluginOptions___extensions = 'pluginCreator___pluginOptions___extensions',
  pluginCreator___pluginOptions___defaultLayouts___default = 'pluginCreator___pluginOptions___defaultLayouts___default',
  pluginCreator___pluginOptions___mediaTypes = 'pluginCreator___pluginOptions___mediaTypes',
  pluginCreator___pluginOptions___head = 'pluginCreator___pluginOptions___head',
  pluginCreator___pluginOptions___anonymize = 'pluginCreator___pluginOptions___anonymize',
  pluginCreator___pluginOptions___respectDNT = 'pluginCreator___pluginOptions___respectDNT',
  pluginCreator___pluginOptions___pageTransitionDelay = 'pluginCreator___pluginOptions___pageTransitionDelay',
  pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator___pluginOptions___theme_color_in_head',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___icon = 'pluginCreator___pluginOptions___icon',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator___pluginOptions___cache_busting_mode',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator___pluginOptions___include_favicon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator___pluginOptions___legacy',
  pluginCreator___pluginOptions___cacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  pluginCreator___pluginOptions___output = 'pluginCreator___pluginOptions___output',
  pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type SitePageFilterInput = {
  readonly path?: Maybe<StringQueryOperatorInput>;
  readonly component?: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName?: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName?: Maybe<StringQueryOperatorInput>;
  readonly matchPath?: Maybe<StringQueryOperatorInput>;
  readonly isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  readonly context?: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator?: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  readonly componentPath?: Maybe<StringQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type SitePageGroupConnection = {
  readonly __typename?: 'SitePageGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  readonly __typename?: 'SitePlugin';
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly pluginOptions?: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath?: Maybe<Scalars['String']>;
  readonly packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  readonly __typename?: 'SitePluginConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  readonly __typename?: 'SitePluginEdge';
  readonly next?: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___displayName = 'pluginOptions___displayName',
  pluginOptions___fileName = 'pluginOptions___fileName',
  pluginOptions___minify = 'pluginOptions___minify',
  pluginOptions___transpileTemplateLiterals = 'pluginOptions___transpileTemplateLiterals',
  pluginOptions___pure = 'pluginOptions___pure',
  pluginOptions___pathToConfigModule = 'pluginOptions___pathToConfigModule',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___base64Width = 'pluginOptions___base64Width',
  pluginOptions___stripMetadata = 'pluginOptions___stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions___defaultQuality',
  pluginOptions___failOnError = 'pluginOptions___failOnError',
  pluginOptions___maxWidth = 'pluginOptions___maxWidth',
  pluginOptions___linkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  pluginOptions___showCaptions = 'pluginOptions___showCaptions',
  pluginOptions___markdownCaptions = 'pluginOptions___markdownCaptions',
  pluginOptions___sizeByPixelDensity = 'pluginOptions___sizeByPixelDensity',
  pluginOptions___backgroundColor = 'pluginOptions___backgroundColor',
  pluginOptions___quality = 'pluginOptions___quality',
  pluginOptions___withWebp = 'pluginOptions___withWebp',
  pluginOptions___tracedSVG = 'pluginOptions___tracedSVG',
  pluginOptions___loading = 'pluginOptions___loading',
  pluginOptions___disableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
  pluginOptions___disableBgImage = 'pluginOptions___disableBgImage',
  pluginOptions___extensions = 'pluginOptions___extensions',
  pluginOptions___defaultLayouts___default = 'pluginOptions___defaultLayouts___default',
  pluginOptions___mediaTypes = 'pluginOptions___mediaTypes',
  pluginOptions___head = 'pluginOptions___head',
  pluginOptions___anonymize = 'pluginOptions___anonymize',
  pluginOptions___respectDNT = 'pluginOptions___respectDNT',
  pluginOptions___pageTransitionDelay = 'pluginOptions___pageTransitionDelay',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___theme_color_in_head = 'pluginOptions___theme_color_in_head',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___cache_busting_mode = 'pluginOptions___cache_busting_mode',
  pluginOptions___include_favicon = 'pluginOptions___include_favicon',
  pluginOptions___legacy = 'pluginOptions___legacy',
  pluginOptions___cacheDigest = 'pluginOptions___cacheDigest',
  pluginOptions___output = 'pluginOptions___output',
  pluginOptions___createLinkInHead = 'pluginOptions___createLinkInHead',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
  readonly resolve?: Maybe<StringQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs?: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs?: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs?: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath?: Maybe<StringQueryOperatorInput>;
  readonly packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  readonly __typename?: 'SitePluginGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  readonly __typename?: 'SitePluginPackageJson';
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly main?: Maybe<Scalars['String']>;
  readonly license?: Maybe<Scalars['String']>;
  readonly dependencies?: Maybe<
    ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>
  >;
  readonly devDependencies?: Maybe<
    ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>
  >;
  readonly peerDependencies?: Maybe<
    ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>
  >;
  readonly keywords?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  readonly __typename?: 'SitePluginPackageJsonDependencies';
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  readonly __typename?: 'SitePluginPackageJsonDevDependencies';
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
  readonly main?: Maybe<StringQueryOperatorInput>;
  readonly license?: Maybe<StringQueryOperatorInput>;
  readonly dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  readonly __typename?: 'SitePluginPackageJsonPeerDependencies';
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  readonly __typename?: 'SitePluginPluginOptions';
  readonly displayName?: Maybe<Scalars['Boolean']>;
  readonly fileName?: Maybe<Scalars['Boolean']>;
  readonly minify?: Maybe<Scalars['Boolean']>;
  readonly transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  readonly pure?: Maybe<Scalars['Boolean']>;
  readonly pathToConfigModule?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly path?: Maybe<Scalars['String']>;
  readonly base64Width?: Maybe<Scalars['Int']>;
  readonly stripMetadata?: Maybe<Scalars['Boolean']>;
  readonly defaultQuality?: Maybe<Scalars['Int']>;
  readonly failOnError?: Maybe<Scalars['Boolean']>;
  readonly maxWidth?: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  readonly showCaptions?: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions?: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  readonly backgroundColor?: Maybe<Scalars['String']>;
  readonly quality?: Maybe<Scalars['Int']>;
  readonly withWebp?: Maybe<Scalars['Boolean']>;
  readonly tracedSVG?: Maybe<Scalars['Boolean']>;
  readonly loading?: Maybe<Scalars['String']>;
  readonly disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  readonly disableBgImage?: Maybe<Scalars['Boolean']>;
  readonly extensions?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayouts>;
  readonly mediaTypes?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly head?: Maybe<Scalars['Boolean']>;
  readonly anonymize?: Maybe<Scalars['Boolean']>;
  readonly respectDNT?: Maybe<Scalars['Boolean']>;
  readonly pageTransitionDelay?: Maybe<Scalars['Int']>;
  readonly short_name?: Maybe<Scalars['String']>;
  readonly start_url?: Maybe<Scalars['String']>;
  readonly theme_color_in_head?: Maybe<Scalars['Boolean']>;
  readonly display?: Maybe<Scalars['String']>;
  readonly icon?: Maybe<Scalars['String']>;
  readonly cache_busting_mode?: Maybe<Scalars['String']>;
  readonly include_favicon?: Maybe<Scalars['Boolean']>;
  readonly legacy?: Maybe<Scalars['Boolean']>;
  readonly cacheDigest?: Maybe<Scalars['String']>;
  readonly output?: Maybe<Scalars['String']>;
  readonly createLinkInHead?: Maybe<Scalars['Boolean']>;
  readonly pathCheck?: Maybe<Scalars['Boolean']>;
  readonly allExtensions?: Maybe<Scalars['Boolean']>;
  readonly isTSX?: Maybe<Scalars['Boolean']>;
  readonly jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultLayouts = {
  readonly __typename?: 'SitePluginPluginOptionsDefaultLayouts';
  readonly default?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultLayoutsFilterInput = {
  readonly default?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  readonly displayName?: Maybe<BooleanQueryOperatorInput>;
  readonly fileName?: Maybe<BooleanQueryOperatorInput>;
  readonly minify?: Maybe<BooleanQueryOperatorInput>;
  readonly transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  readonly pure?: Maybe<BooleanQueryOperatorInput>;
  readonly pathToConfigModule?: Maybe<StringQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly path?: Maybe<StringQueryOperatorInput>;
  readonly base64Width?: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality?: Maybe<IntQueryOperatorInput>;
  readonly failOnError?: Maybe<BooleanQueryOperatorInput>;
  readonly maxWidth?: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions?: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor?: Maybe<StringQueryOperatorInput>;
  readonly quality?: Maybe<IntQueryOperatorInput>;
  readonly withWebp?: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  readonly loading?: Maybe<StringQueryOperatorInput>;
  readonly disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  readonly extensions?: Maybe<StringQueryOperatorInput>;
  readonly defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayoutsFilterInput>;
  readonly mediaTypes?: Maybe<StringQueryOperatorInput>;
  readonly head?: Maybe<BooleanQueryOperatorInput>;
  readonly anonymize?: Maybe<BooleanQueryOperatorInput>;
  readonly respectDNT?: Maybe<BooleanQueryOperatorInput>;
  readonly pageTransitionDelay?: Maybe<IntQueryOperatorInput>;
  readonly short_name?: Maybe<StringQueryOperatorInput>;
  readonly start_url?: Maybe<StringQueryOperatorInput>;
  readonly theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  readonly display?: Maybe<StringQueryOperatorInput>;
  readonly icon?: Maybe<StringQueryOperatorInput>;
  readonly cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  readonly include_favicon?: Maybe<BooleanQueryOperatorInput>;
  readonly legacy?: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest?: Maybe<StringQueryOperatorInput>;
  readonly output?: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  readonly pathCheck?: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions?: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX?: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  readonly __typename?: 'SiteSiteMetadata';
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly defaultTitle?: Maybe<Scalars['String']>;
  readonly titleTemplate?: Maybe<Scalars['String']>;
  readonly image?: Maybe<Scalars['String']>;
  readonly lang?: Maybe<Scalars['String']>;
  readonly siteUrl?: Maybe<Scalars['String']>;
  readonly twitter?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  readonly title?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly defaultTitle?: Maybe<StringQueryOperatorInput>;
  readonly titleTemplate?: Maybe<StringQueryOperatorInput>;
  readonly image?: Maybe<StringQueryOperatorInput>;
  readonly lang?: Maybe<StringQueryOperatorInput>;
  readonly siteUrl?: Maybe<StringQueryOperatorInput>;
  readonly twitter?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type StringQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['String']>;
  readonly ne?: Maybe<Scalars['String']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex?: Maybe<Scalars['String']>;
  readonly glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  readonly grayscale?: Maybe<Scalars['Boolean']>;
  readonly duotone?: Maybe<DuotoneGradient>;
  readonly rotate?: Maybe<Scalars['Int']>;
  readonly trim?: Maybe<Scalars['Float']>;
  readonly cropFocus?: Maybe<ImageCropFocus>;
  readonly fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  readonly quality?: Maybe<Scalars['Int']>;
};