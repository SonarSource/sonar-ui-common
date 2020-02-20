/*
 * Sonar UI Common
 * Copyright (C) 2019-2019 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import * as React from 'react';
import { ThemeProvider } from '../components/theme';
// eslint-disable-next-line jest/no-mocks-import
import { mockedTheme } from '../components/__mocks__/mockedTheme';
import AlertErrorIcon from '../components/icons/AlertErrorIcon';
import AlertSuccessIcon from '../components/icons/AlertSuccessIcon';
import AlertWarnIcon from '../components/icons/AlertWarnIcon';
import BackIcon from '../components/icons/BackIcon';
import BranchIcon from '../components/icons/BranchIcon';
import BubblesIcon from '../components/icons/BubblesIcon';
import BugIcon from '../components/icons/BugIcon';
import BugTrackerIcon from '../components/icons/BugTrackerIcon';
import BulletListIcon from '../components/icons/BulletListIcon';
import CalendarIcon from '../components/icons/CalendarIcon';
import ChartLegendIcon from '../components/icons/ChartLegendIcon';
import CheckIcon from '../components/icons/CheckIcon';
import ChevronDownIcon from '../components/icons/ChevronDownIcon';
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon';
import ChevronRightIcon from '../components/icons/ChevronRightIcon';
import ChevronUpIcon from '../components/icons/ChevronUpIcon';
import ClearIcon from '../components/icons/ClearIcon';
import ClockIcon from '../components/icons/ClockIcon';
import CodeSmellIcon from '../components/icons/CodeSmellIcon';
import CollapseIcon from '../components/icons/CollapseIcon';
import ContinuousIntegrationIcon from '../components/icons/ContinuousIntegrationIcon';
import CopyIcon from '../components/icons/CopyIcon';
import DeleteIcon from '../components/icons/DeleteIcon';
import DetachIcon from '../components/icons/DetachIcon';
import DropdownIcon from '../components/icons/DropdownIcon';
import EditIcon from '../components/icons/EditIcon';
import EllipsisIcon from '../components/icons/EllipsisIcon';
import ExpandIcon from '../components/icons/ExpandIcon';
import ExpandSnippetIcon from '../components/icons/ExpandSnippetIcon';
import FavoriteIcon from '../components/icons/FavoriteIcon';
import FilterIcon from '../components/icons/FilterIcon';
import GroupIcon from '../components/icons/GroupIcon';
import HelpIcon from '../components/icons/HelpIcon';
import HistoryIcon from '../components/icons/HistoryIcon';
import HomeIcon from '../components/icons/HomeIcon';
import HouseIcon from '../components/icons/HouseIcon';
import InfoIcon from '../components/icons/InfoIcon';
import IssueIcon from '../components/icons/IssueIcon';
import IssueTypeIcon from '../components/icons/IssueTypeIcon';
import LightBulbIcon from '../components/icons/LightBulbIcon';
import LinkIcon from '../components/icons/LinkIcon';
import ListIcon from '../components/icons/ListIcon';
import LockIcon from '../components/icons/LockIcon';
import LongLivingBranchIcon from '../components/icons/LongLivingBranchIcon';
import MeasuresIcon from '../components/icons/MeasuresIcon';
import MinimizeIcon from '../components/icons/MinimizeIcon';
import NotificationIcon from '../components/icons/NotificationIcon';
import OnboardingAddMembersIcon from '../components/icons/OnboardingAddMembersIcon';
import OnboardingProjectIcon from '../components/icons/OnboardingProjectIcon';
import OnboardingTeamIcon from '../components/icons/OnboardingTeamIcon';
import OpenCloseIcon from '../components/icons/OpenCloseIcon';
import PendingIcon from '../components/icons/PendingIcon';
import PinIcon from '../components/icons/PinIcon';
import PlusCircleIcon from '../components/icons/PlusCircleIcon';
import PlusIcon from '../components/icons/PlusIcon';
import ProjectEventIcon from '../components/icons/ProjectEventIcon';
import ProjectLinkIcon from '../components/icons/ProjectLinkIcon';
import PullRequestIcon from '../components/icons/PullRequestIcon';
import QualifierIcon from '../components/icons/QualifierIcon';
import RecommendedIcon from '../components/icons/RecommendedIcon';
import RuleScopeIcon from '../components/icons/RuleScopeIcon';
import SCMIcon from '../components/icons/SCMIcon';
import SearchIcon from '../components/icons/SearchIcon';
import SecurityHotspotIcon from '../components/icons/SecurityHotspotIcon';
import SeverityIcon from '../components/icons/SeverityIcon';
import ShortLivingBranchIcon from '../components/icons/ShortLivingBranchIcon';
import SortAscIcon from '../components/icons/SortAscIcon';
import SortDescIcon from '../components/icons/SortDescIcon';
import StatusIcon from '../components/icons/StatusIcon';
import TagsIcon from '../components/icons/TagsIcon';
import TestStatusIcon from '../components/icons/TestStatusIcon';
import TreeIcon from '../components/icons/TreeIcon';
import TreemapIcon from '../components/icons/TreemapIcon';
import VisibleIcon from '../components/icons/VisibleIcon';
import VulnerabilityIcon from '../components/icons/VulnerabilityIcon';
import WarningIcon from '../components/icons/WarningIcon';

export default {
  title: 'Icon'
};

export const AlertError = () => (
  <ThemeProvider theme={mockedTheme}>
    <AlertErrorIcon />
  </ThemeProvider>
);
export const AlertSuccess = () => (
  <ThemeProvider theme={mockedTheme}>
    <AlertSuccessIcon />
  </ThemeProvider>
);
export const AlertWarn = () => (
  <ThemeProvider theme={mockedTheme}>
    <AlertWarnIcon />
  </ThemeProvider>
);
export const Back = () => <BackIcon />;
export const Branch = () => (
  <ThemeProvider theme={mockedTheme}>
    <BranchIcon />
  </ThemeProvider>
);
export const Bubbles = () => <BubblesIcon />;
export const Bug = () => <BugIcon />;
export const BugTracker = () => <BugTrackerIcon />;
export const BulletList = () => <BulletListIcon />;
export const Calendar = () => <CalendarIcon />;
export const ChartLegend = () => (
  <ThemeProvider theme={mockedTheme}>
    <ChartLegendIcon index={0} />
  </ThemeProvider>
);
export const Check = () => <CheckIcon />;
export const ChevronDown = () => <ChevronDownIcon />;
export const ChevronLeft = () => <ChevronLeftIcon />;
export const ChevronRight = () => <ChevronRightIcon />;
export const ChevronUp = () => <ChevronUpIcon />;
export const Clear = () => <ClearIcon />;
export const Clock = () => <ClockIcon />;
export const CodeSmell = () => <CodeSmellIcon />;
export const Collapse = () => <CollapseIcon />;
export const ContinuousIntegration = () => <ContinuousIntegrationIcon />;
export const Copy = () => <CopyIcon />;
export const Delete = () => <DeleteIcon />;
export const Detach = () => <DetachIcon />;
export const Dropdown = () => <DropdownIcon />;
export const Edit = () => <EditIcon />;
export const Ellipsis = () => <EllipsisIcon />;
export const Expand = () => <ExpandIcon />;
export const ExpandSnippet = () => <ExpandSnippetIcon />;
export const Favorite = () => (
  <ThemeProvider theme={mockedTheme}>
    <FavoriteIcon favorite={true} />
    <FavoriteIcon favorite={false} />
  </ThemeProvider>
);
export const Filter = () => <FilterIcon />;
export const Group = () => (
  <ThemeProvider theme={mockedTheme}>
    <GroupIcon />
  </ThemeProvider>
);
export const Help = () => <HelpIcon />;
export const History = () => <HistoryIcon />;
export const Home = () => (
  <ThemeProvider theme={mockedTheme}>
    <HomeIcon />
  </ThemeProvider>
);
export const House = () => <HouseIcon />;
export const Info = () => <InfoIcon />;
export const Issue = () => (
  <>
    <IssueIcon type="BUG" />
    <IssueIcon type="VULNERABILITY" />
    <IssueIcon type="CODE_SMELL" />
    <IssueIcon type="SECURITY_HOTSPOT" />
  </>
);
export const IssueType = () => (
  <>
    <IssueTypeIcon query="bug" />
    <IssueTypeIcon query="bugs" />
    <IssueTypeIcon query="new_bugs" />
    <IssueTypeIcon query="vulnerability" />
    <IssueTypeIcon query="vulnerabilities" />
    <IssueTypeIcon query="new_vulnerabilities" />
    <IssueTypeIcon query="code_smell" />
    <IssueTypeIcon query="code_smells" />
    <IssueTypeIcon query="new_code_smells" />
    <IssueTypeIcon query="security_hotspot" />
    <IssueTypeIcon query="security_hotspots" />
  </>
);
export const LightBulb = () => <LightBulbIcon />;
export const Link = () => <LinkIcon />;
export const List = () => <ListIcon />;
export const Lock = () => <LockIcon />;
export const LongLivingBranch = () => (
  <ThemeProvider theme={mockedTheme}>
    <LongLivingBranchIcon />
  </ThemeProvider>
);
export const Measures = () => <MeasuresIcon />;
export const Minimize = () => <MinimizeIcon />;
export const Notification = () => (
  <ThemeProvider theme={mockedTheme}>
    <NotificationIcon />
  </ThemeProvider>
);
export const OnboardingAddMembers = () => (
  <ThemeProvider theme={mockedTheme}>
    <OnboardingAddMembersIcon />
  </ThemeProvider>
);
export const OnboardingProject = () => (
  <ThemeProvider theme={mockedTheme}>
    <OnboardingProjectIcon />
  </ThemeProvider>
);
export const OnboardingTeam = () => (
  <ThemeProvider theme={mockedTheme}>
    <OnboardingTeamIcon />
  </ThemeProvider>
);
export const OpenClose = () => (
  <>
    <OpenCloseIcon open={true} />
    <OpenCloseIcon open={false} />
  </>
);
export const Pending = () => (
  <ThemeProvider theme={mockedTheme}>
    <PendingIcon />
  </ThemeProvider>
);
export const Pin = () => <PinIcon />;
export const PlusCircle = () => <PlusCircleIcon />;
export const Plus = <PlusIcon />;
export const ProjectEvent = () => <ProjectEventIcon />;
export const ProjectLink = () => (
  <>
    <ProjectLinkIcon type="issue" />
    <ProjectLinkIcon type="homepage" />
    <ProjectLinkIcon type="ci" />
    <ProjectLinkIcon type="scm" />
    <ProjectLinkIcon type="something else" />
  </>
);
export const PullRequest = () => (
  <ThemeProvider theme={mockedTheme}>
    <PullRequestIcon />
  </ThemeProvider>
);
export const Qualifier = () => (
  <ThemeProvider theme={mockedTheme}>
    <QualifierIcon qualifier="app" />
    <QualifierIcon qualifier="brc" />
    <QualifierIcon qualifier="dev" />
    <QualifierIcon qualifier="dir" />
    <QualifierIcon qualifier="fil" />
    <QualifierIcon qualifier="svw" />
    <QualifierIcon qualifier="trk" />
    <QualifierIcon qualifier="uts" />
    <QualifierIcon qualifier="vw" />

    <p>Deprecated</p>
    <QualifierIcon qualifier="cla" />
    <QualifierIcon qualifier="dev_prj" />
    <QualifierIcon qualifier="lib" />
    <QualifierIcon qualifier="pac" />

    <p>Other</p>
    <QualifierIcon qualifier={null} />
    <QualifierIcon qualifier={undefined} />
  </ThemeProvider>
);
export const Recommended = () => <RecommendedIcon />;
export const RuleScope = () => <RuleScopeIcon />;
export const SCM = () => <SCMIcon />;
export const Search = () => <SearchIcon />;
export const SecurityHotspot = () => <SecurityHotspotIcon />;
export const Severity = () => (
  <ThemeProvider theme={mockedTheme}>
    <SeverityIcon severity="blocker" />
    <SeverityIcon severity="critical" />
    <SeverityIcon severity="major" />
    <SeverityIcon severity="minor" />
    <SeverityIcon severity="info" />
  </ThemeProvider>
);
export const ShortLivingBranch = () => (
  <ThemeProvider theme={mockedTheme}>
    <ShortLivingBranchIcon />
  </ThemeProvider>
);
export const SortAsc = () => <SortAscIcon />;
export const SortDesc = () => <SortDescIcon />;
export const Status = () => (
  <ThemeProvider theme={mockedTheme}>
    <StatusIcon status="open" />
    <StatusIcon status="confirmed" />
    <StatusIcon status="reopened" />
    <StatusIcon status="resolved" />
    <StatusIcon status="closed" />
    <StatusIcon status="to_review" />
    <StatusIcon status="in_review" />
    <StatusIcon status="reviewed" />
  </ThemeProvider>
);
export const Tags = () => <TagsIcon />;
export const TestStatus = () => (
  <ThemeProvider theme={mockedTheme}>
    <TestStatusIcon status="ok" />
    <TestStatusIcon status="failure" />
    <TestStatusIcon status="error" />
    <TestStatusIcon status="skipped" />
  </ThemeProvider>
);
export const Tree = () => <TreeIcon />;
export const Treemap = () => <TreemapIcon />;
export const Visible = () => <VisibleIcon />;
export const Vulnerability = () => <VulnerabilityIcon />;
export const Warning = () => (
  <ThemeProvider theme={mockedTheme}>
    <WarningIcon />
  </ThemeProvider>
);
